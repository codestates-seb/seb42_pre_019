import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Menubar from './components/Menubar';
// import Menubar from './components/Menubar';
import AskQuestion from './pages/AskQuestion';
import Home from './pages/Home';
import Login from './pages/Login';
import QuestionDetail from './pages/QuestionDetail';
import Questions from './pages/Questions';
// import SignUp from './pages/SignUp';
import Tags from './pages/Tags';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';

import { useState } from 'react';

// const userid = 0;

// const Container2 = styled.div`
//   position: relative;
//   max-width: 1264px;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin: 0 auto;
//   margin-top: 0;
//   background-color: white;
// `;
const Sidebar = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 164px;
  height: calc(100vh - 200px);
`;
const Content = styled.div`
  display: flex;
  justify-content: start;
  max-width: 1100px;
  width: calc(100% - 164px);
  background-color: antiquewhite;
  height: 1500px;
`;

//TODO: header 삼항연산자로

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const yesLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <BrowserRouter>
      <Header yesLogin={yesLogin} />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/signup" element={<SignUp />}></Route> */}
      </Routes>
      {isLogin === true ? (
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      ) : (
        <>
          <div className="container">
            <Sidebar>
              <Menubar />
            </Sidebar>
            <Content>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>

                <Route path="/questions" element={<Questions />}></Route>
                <Route path="/askquestion" element={<AskQuestion />}></Route>
                <Route
                  path="/questiondetail"
                  element={<QuestionDetail />}
                ></Route>

                <Route path="/tags" element={<Tags />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/userdetail" element={<UserDetail />}></Route>
              </Routes>
            </Content>
          </div>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}
