import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// let navigate = useNavigate();
// function f1(){navigate('/mypage');}

// <div onClick={()=>{navigate()}}></div>

//navigate() 괄호 안에 1 하면 앞으로1칸 , -1 하면 뒤로1칸이동 , 함수라 특정조건일때 페이지 이동가능.

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Users() {
  // 사용자 목록을 가져오는 코드
  // ...

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserDetail({ userId }) {
  // 사용자 상세 정보를 가져오는 코드
  // ...

  return (
    <div>
      <h2>{user.name}님의 정보</h2>
      <p>이메일: {user.email}</p>
      <p>전화번호: {user.phone}</p>
      {/* 사용자 정보 출력 */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}
