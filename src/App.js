import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

// ===== style import =====
import GlobalStyle from "./styles/GlobalStyle";

// ===== pages import =====
// === Auth pages ===
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import FindId from "./pages/FindId/FindId";
import FindPw from "./pages/FindPw/FindPw";
import ChangePw from "./pages/ChangePw/ChangePw";
// === Service pages ===
import Main from "./pages/Main/Main";
import Setup from "./pages/Setup/Setup";
import Schedule from "./pages/Schedule/Schedule";
import Matching from "./pages/Matching/Matching";
import Feed from "./pages/Feed/Feed";
import FeedEditor from "./pages/FeedEditor/FeedEditor";
import QnA from "./pages/QnA/QnA";
import QnAList from "./pages/QnAList/QnAList";
// === Not Found page ===
import NotFound from "./pages/NotFound/NotFound";

// ===== component =====
const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpw" element={<FindPw />} />
          <Route path="/changepw" element={<ChangePw />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feededitor/add" element={<FeedEditor />} />
          <Route path="/feededitor/edit" element={<FeedEditor />} />
          <Route path="/qna/:idx" element={<QnA />} />
          <Route path="/qna/today" element={<QnA />} />
          <Route path="/qnalist" element={<QnAList />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
