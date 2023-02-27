import styled from 'styled-components';
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Toast from '../components/Toast';
import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable */

const Logincss = styled.div`
  /* background-color: red; */
  background-color: hsl(210, 8%, 95%);
  position: absolute;
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  z-index: 999;
  box-sizing: border-box;
  padding: 24px 99px 24px 99px;
  overflow-y: hidden;

  .loginItemBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: inherit;
    width: 278px;
  }
  .imgbox {
    position: relative;
    width: 32px;
    height: 37px;
    overflow: hidden;
    margin-bottom: 24px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 186.6px;
      height: 37.2px;
    }
  }

  .btn {
    display: flex;
    margin: 4px 0px;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 5px;
    justify-content: center;
    box-sizing: inherit;
    box-shadow: none;
    img {
      padding-right: 6px;
      width: 18px;
      height: 18px;
    }
  }
  .goobtn {
    background-color: white;
    color: hsl(210, 8%, 15%);
  }
  .gitbtn {
    background-color: #2f3337;
    color: white;
  }
  .facebtn {
    background-color: #385499;
    color: white;
    img {
      filter: brightness(0) invert(1);
    }
  }
  .openid-btn-box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin-bottom: 12px;
    width: 100%;

    /* max-width: calc(97.2307692rem * 3); */
  }
  #formContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-sizing: inherit;
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    border-radius: 7px;
    padding: 24px;
    width: 100%;
    margin: 3px 0px;
    .password {
      margin-bottom: 20px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 12px;
      color: black;
    }
    .log {
      border: 1px solid hsl(206, 100%, 52%);
      border-radius: 3px;
      background-color: hsl(206, 100%, 52%);
      color: white;
      box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
      font-size: 1em;
      padding: 1em 0;
      margin-bottom: 0px;
      width: 100%;
    }
    span {
      padding: 0px 0px 10px 0px;
      font-size: 1.2em;
      font-weight: bolder;
    }
    .errormessage {
      /* display: none; */
      margin-top: 4px;
      color: red;
      font-size: 0.9em;
    }
  }
  .help {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 0px;
    padding: 16px;
    text-decoration: none;
    color: #232629;
    a {
      color: hsl(206, 100%, 40%);
      text-decoration: none;
      /* margin-left: 2px; */
    }
    a:visited {
      text-decoration: none;
    }
    a:hover {
      color: hsl(206, 100%, 52%);
      text-decoration: none;
    }
    .mt12 {
      margin-top: 12px;
    }
  }
`;

export default function Login() {
  //!Redux test
  const isLogin = useSelector((store) => store.userReducer.isLogin); //! state 꺼내오기 hook
  const dispatch = useDispatch(); //! dispatch 쉽게하는 hook

  //여기까지 Redux test

  const [userEmail, setUserEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  // const [LoginFailMsg,setLoginFailMsg] = useState('')

  const [showToast, setShowToast] = useState(false);
  const [phrase, setPhrase] = useState(5);

  //!toastMsg
  const handleInputChange = (event) => {
    setPhrase(event.target.value);
  };
  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 6000);
      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  //!login
  const loginData = {
    id: Math.random().toString(36).substring(2, 11),
    userEmail: userEmail,
    password: password,
  };

  const loginRequestHandler = (e) => {
    console.log(userEmail, password);
    e.preventDefault();
    if (!userEmail) {
      if (!password) {
        setPasswordErrorMessage('Please fill the password form');
      }
      return setEmailErrorMessage('Please fill the Name form');
    } else if (!password) {
      return setPasswordErrorMessage('Please fill the password form');
    } else {
      setUserEmail('');
      setPassword('');
      setEmailErrorMessage('');
      setPasswordErrorMessage('');
    }
    return axios
      .post(`${process.env.REACT_APP_API_KEY}/login`, loginData)
      .then((res) => {
        //setUserInfo(res.data); //!유저인포 담아주기
        console.log(res.data);
        e.preventDefault();
        dispatch(loginAction(res.data));
      })
      .catch((err) => {
        setShowToast(true);
      });
  };
  console.log(isLogin);
  return (
    <Logincss>
      {showToast && (
        <Toast
          style={{ backgroundColor: 'hsl(210,8%,15%)', color: 'white' }}
          inputE={
            <input
              style={{ display: 'none' }}
              type="text"
              value={phrase}
              onChange={handleInputChange}
            />
          }
          phrase={phrase}
          title={'로그인에 실패했습니다.'}
          secText={`초 뒤 다시 로그인을 시도 하세요`}
        />
      )}
      <div className="loginItemBox">
        <div className="imgbox">
          <img src="logo-stackoverflow.png" alt="miniLogo" />
        </div>
        <div className="openid-btn-box">
          <div className="goobtn btn">
            <img src="googleLogo.png" alt="googleLogo" />
            Log in with Google
          </div>
          <div className="gitbtn btn">
            <img src="githubLogo.png" alt="googleLogo" />
            Log in with GitHub
          </div>
          <div className="facebtn btn">
            <img src="facebookLogo.png" alt="googleLogo" />
            Log in with Facebook
          </div>
        </div>
        <div id="formContainer">
          <form onSubmit={loginRequestHandler}>
            <div className="email">
              <span>Email</span>
              <input
                placeholder="email"
                type="text"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                //!onChange를 ()=> 형식으로 하면 handelLogin.. 함수가 실행이 안됨 대신 input form이 이어지고 계속 써짐
                //!반면 onChange를 ()=>없이쓰면 handle... 함수는 실행 되는데 한글자 이상 입력 불가
              ></input>
              {emailErrorMessage === '' ? null : (
                <p className="errormessage">{emailErrorMessage}</p>
              )}
            </div>
            <div className="password">
              <span>Password</span>
              <input
                placeholder="password"
                type="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            {passwordErrorMessage === '' ? null : (
              <p className="errormessage">{passwordErrorMessage}</p>
            )}
            <button className="log btn" type="submit">
              Log in
            </button>
          </form>
        </div>
        <div className="help">
          <div>
            Don’t have an account? <a href="/signup"> Sign up</a>
          </div>
          <div className="mt12">
            Are you an employer?
            <a href="/login"> Sign up on Talent </a>
          </div>
        </div>
      </div>
    </Logincss>
  );
}
