from rest_framework import serializers
from freeboard.models import Post
from django.contrib.auth.models import User
#로그인 관련


class PostSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Post        # Post 모델 사용
        owner = serializers.ReadOnlyField(source='owner.username')
        #ReadOnlyField란 Charfield(read_only=True)랑 똑같은거
        #source를 통해 field 채울 내용을 정함
        fields = ('id', 'title', 'content', 'owner',)            # 모든 필드 포함

class UserSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(many=True, queryset=Post.objects.all())
    #Freeboard는 현재 User와 역참조 관계라서 serializer에서 자동으로 추가가 안된다.
    # 따라서 명백히 선언해줄 필요가 있고,
    # 그래야 model의 owner필드에서 설정한 related_name 속성으로 찾아낼 수가 있다.

    class Meta:
        model = User
        fields = ("id", "username", "post")