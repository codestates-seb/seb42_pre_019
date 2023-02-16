import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Menubar from './components/Menubar';
import AskQuestion from './pages/AskQuestion';
import Home from './pages/Home';
import Login from './pages/Login';
import QuestionDetail from './pages/QuestionDetail';
import Questions from './pages/QuestionsPage';
import SignUp from './pages/SignUp';
import Tags from './pages/Tags';
import Users from './pages/Users';

// const userid = 0;
const Center = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Center>
        <Menubar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/questions" element={<Questions />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/askquestion" element={<AskQuestion />}></Route>
          <Route path="/questiondetail" element={<QuestionDetail />}></Route>
          <Route path="/tags" element={<Tags />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </Center>
      <Footer />
    </BrowserRouter>
  );
}
