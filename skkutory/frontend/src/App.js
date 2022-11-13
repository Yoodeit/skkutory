//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import FreeBoard from "./components/board/list/FreeBoard";
import FreeWriting from "./components/board/writing/FreeWriting";
import InfoBoard from "./components/board/list/InfoBoard";
import InfoWriting from "./components/board/writing/InfoWriting";
import SuggBoard from "./components/board/list/SuggBoard";
import SuggWriting from "./components/board/writing/SuggWriting";
import GroupBoard from "./components/board/list/GroupBoard";
import GroupWriting from "./components/board/writing/GroupWriting";
import ShareBoard from "./components/board/list/ShareBoard";
import ShareWriting from "./components/board/writing/ShareWriting";
import RoommateFind from "./components/board/list/RoommateFind";
import RoommateWriting from "./components/board/writing/RoommateWriting";
import Notice from "./components/notice/NoticeList"
import Chat from "./components/Chat";
import Home from "./components/home/Home";
import SignIn from "./components/signin/SignIn";
import Login from "./components/signin/Login";
import SignUp from "./components/signin/SignUp";
import MyPage from "./components/mypage/MyPage";
import MyPageEdit from "./components/mypage/MyPageEdit";
import MyPost from "./components/mypage/Mypost";
import MyComment from "./components/mypage/Mycomment";
import Bookmark from "./components/mypage/Bookmark";
import Header from './components/Header';

//css
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route pathe="/mypageedit" element={<MyPageEdit />}></Route>
          <Route path="/mypost" element={<MyPost />}></Route>
          <Route path="/mycomment" element={<MyComment />}></Route>
          <Route path="/bookmark" element={<Bookmark />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/freeboard" element={<FreeBoard />}></Route>
          <Route path="/freeboard/writing" element={<FreeWriting />}></Route>
          <Route path="/infoboard" element={<InfoBoard />}></Route>
          <Route path="/infoboard/writing" element={<InfoWriting />}></Route>
          <Route path="/suggboard" element={<SuggBoard />}></Route>
          <Route path="/suggboard/writing" element={<SuggWriting />}></Route>
          <Route path="/groupboard" element={<GroupBoard />}></Route>
          <Route path="/groupboard/writing" element={<GroupWriting />}></Route>
          <Route path="/shareboard" element={<ShareBoard />}></Route>
          <Route path="/shareboard/writing" element={<ShareWriting />}></Route>
          <Route path="/roommatefind" element={<RoommateFind />}></Route>
          <Route path="/roommatefind/writing" element={<RoommateWriting />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
