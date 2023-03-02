import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Menubar from './components/Menubar';

import AskQuestion from './pages/AskQuestion';
import Home from './pages/Home';
import Login from './pages/Login';
import QuestionDetail from './pages/QuestionDetail';
import Questions from './pages/Questions';
import SignUp from './pages/SignUp';
import Tags from './pages/Tags';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Aside from './components/Aside';

const Sidebar = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 164px;
  min-height: 670px;
  border-right: 1px solid #d4d4d4;
`;
const Content = styled.div`
  display: flex;
  justify-content: start;
  max-width: 1100px;
  width: calc(100% - 300px);
  min-height: calc(100vh - 200px);
  margin-bottom: 50px;
  padding: 24px 0;
`;

//TODO: header 삼항연산자로

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>

      <div className="container">
        <Sidebar>
          <Menubar />
        </Sidebar>
        <Content>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              path="/questions/:questionId"
              element={<QuestionDetail />}
            ></Route>

            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/askquestion" element={<AskQuestion />}></Route>

            <Route path="/tags" element={<Tags />}></Route>
            <Route path="/users/:userId" element={<UserDetail />}></Route>
            <Route path="/users" element={<Users />}></Route>
            {/* <Route path="/userdetail" element={<UserDetail />}></Route> */}
            {/* <Route
              path="/users/:userId"
              render={(props) => <UserDetail {...props} />}
            ></Route> */}
          </Routes>
          <Aside />
        </Content>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
