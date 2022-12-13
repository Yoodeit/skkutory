from django.shortcuts import render, HttpResponse
from .api.serializers import PostSerializer, UserSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
#from rest_framework.decorators import api_view
from rest_framework.views import APIView
#APIView : 공통적인 함수 재사용 가능, DRY정책 따르도록 하는 강력한 패턴을 제공
from rest_framework import mixins, generics, permissions
from .models import Post
from django.http import Http404
from rest_framework import status
from .permissions import IsOwnerOrReadOnly


#DRF API view -> 두 종류의 wrapper 선택 가능.
#1. 함수형 : @api_view 데코레이터 사용
#2. 클래스형 : APIView 클래스 상속

#REST API 설계 시 반드시 지켜야 할 대원칙
# 첫째, URL은 정보의 자원을 포함할 것.
# 둘째, 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현할 것
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    #post요청 시 실행되는 perform_create라는 method를 오버라이딩함으로서 기본 create함수를 바꿔줄 수 있다.
    # 즉, serializer.save(owner=self.request.user)를 통해 FreeboardSerializer속 field인 owner를 현재의 user로 채운 것!
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # drf가 이용자 권한 설정 클래스를 제공한다
    # 여기서는 IsAuthenticatedOrReadOnly이다. authenticated만 R이랑 C 둘 다 가능, 아니면 R만

    def perform_create(self, serializer):
        #post요청하면 perform_create() 오버라이딩
        #instance save를 수정가능
        serializer.save(owner = self.request.user)
  


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    
class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

'''
class FreeboardList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset =Freeboard.objects.all()
    serializer_class = FreeboardSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class FreeboardDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Freeboard.objects.all()
    serializer_class = FreeboardSerializer

    def get(self, request, *args, **kwagrs):
        return self.retrieve(request, *args, **kwagrs)
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
'''


'''
class FreeboardList(APIView):
    def get(self, request, format=None):
        post = Freeboard.objects.all()
        serializer = FreeboardSerializer(post, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        #POST요청할 때
        serializer = FreeboardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_201_CREATED)

class FreeboardDetail(APIView):
    def get_object(self, pk):
        try:
            return Freeboard.objects.get(pk=pk)
        except Freeboard.DoesNotExist:
            return Http404
    def get(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = FreeboardSerializer(post)
        return Response(serializer.data)
    def put(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = FreeboardSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, format=None):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
'''

'''
#api_view 데코레이터! -> @api_view(['method명']) 형식으로 사용
@api_view(['GET', 'POST'])
def FreeboardList(request):
    #read
    if request.method == "GET": #get요청이 왔을 때
        freeboard = Freeboard.objects.all()
        serialzer = FreeboardSerializer(freeboard, many = True)
        #many = True -> Freeboard.objects.all()로 검색한 결과는 list 형태이다.
        # serializer는 한 개의 객체만 이해할 수 있고, 리스트는 이해할 수 없다.
        # 따라서 Many = True를 추가해서 중복 표현 값에 대한 List를 받게끔 하자.

        return Response(serialzer.data)
        #response의 정체는?
        # TemplateResponse 객체의 일종으로 렌더링되지 않은 컨텐츠를 가져오고
        # 클라이언트에게 반환할 올바른 컨텐츠 유형을 결정.
        # 마구잡이로 보낸 serializer.data를 각 목적에 맞게(여기선 GET요청이니 리소스 조회) 보여줄 수 있도록 하는 것!
    
    #create
    elif request.method == "POST": #post요청이 왔을 때
        serialzer = FreeboardSerializer(data=request.data)
        #request.data의 정체는?
        # DRF가 제공한다. 기존의 HttpRequest를 request객체로 확장하여, 더 유연한 요청 피싱을 제공
        # 핵심적 기능은 form에서 썼던 request.POST와 유사하지만 웹 API에 더 유용한 속성

        if serialzer.is_valid():
            #POST요청에 유효성 검사는 필수
            serialzer.save()
            return Response(serialzer.data, status = 201)
        return Response(serialzer.errors, status=404)
        #status의 정체는? DRF가 제공하는 HTTP상태코드. 에러 종류에 따라 더욱 명시적인 식별자를 제공
'''


def index(request):
    return HttpResponse('Welcome to Lonely Backend Side!')