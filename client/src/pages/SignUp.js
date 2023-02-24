import { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../App.css';
// import profile from '../../public/profileImg';
import axios from 'axios';
import Toast from '../components/Toast';

/* eslint-disable */
const SignUpcss = styled.section`
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
  .signupTextBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 48px;
    h1 {
      font-size: 1.6rem;
      margin: 0 0 1em;
    }
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
    }
    .text-1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    img {
      filter: invert(42%) sepia(38%) saturate(4602%) hue-rotate(189deg)
        brightness(105%) contrast(100%);
      margin-right: 8px;
    }
    a {
      color: hsl(206, 100%, 40%);
      text-decoration: none;
      cursor: pointer;
    }
    a:hover {
      color: hsl(206, 100%, 52%);
      text-decoration: none;
      cursor: pointer;
    }
  }
  .loginItemBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: inherit;
    width: 278px;
    .text {
      margin-top: 10px;
    }
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
    /* width: 100%; */
    margin: 3px 0px;
    max-width: 316px;
    .password {
      margin-bottom: 25px;
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
      padding: 0px 0px 8px 0px;
      font-size: 1.2em;
      font-weight: bolder;
    }
    .errormessage {
      /* display: none; */
      margin-top: 4px;
      color: red;
      font-size: 0.9em;
    }
    .text {
      margin-top: 32px;
      color: hsl(210, 8%, 45%);
      font-size: 12px;
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

export default function SignUp() {
  //TODO: State space
  const [displayName, setDisplayName] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const avataImg = `profileImg/${Math.floor(Math.random() * 10)}.png`;

  const data = {
    userid: Math.floor(Math.random() * 5000),
    displayName: displayName,
    userEmail: userEmail,
    password: password,
    signupAt: new Date().toLocaleDateString('en-US'),
    profileImg: avataImg,
  };

  //!toastMessage
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        window.location.href = '/login';
        setShowToast(false);
      }, 6000);
      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  //!toastMessage

  //빈칸 에러메세지 표기 및 axios 요청
  const signupRequestHandler = (e) => {
    console.log(displayName, userEmail, password);
    e.preventDefault();
    if (!displayName) {
      if (!userEmail) {
        setEmailErrorMessage('Please fill the email form');
      }
      if (!password) {
        setPasswordErrorMessage('Please fill the password form');
      }
      return setNameErrorMessage('Please fill the Name form');
    } else if (!userEmail) {
      if (!password) {
        setPasswordErrorMessage('Please fill the password form');
      }
      return setEmailErrorMessage('Please fill the email form');
    } else if (!password) {
      return setPasswordErrorMessage('Please fill the password form');
    } else {
      setDisplayName('');
      setUserEmail('');
      setPassword('');
      setNameErrorMessage('');
      setEmailErrorMessage('');
      setPasswordErrorMessage('');
    }
    return axios
      .post('http://localhost:5000/users', data)
      .then((res) => {
        //setUserInfo(res.data); //!응답오면 유저인포 담아주고 ->아직 선언 X
        //todo: toast message
        //todo: loginPage 이동
        console.log(res.data);
        e.preventDefault();
        setShowToast(true);
      })
      .catch((err) => {
        console.log('error');
        // if (err.response.status === 401) {
        //   setErrorMessage("로그인에 실패했습니다.");
        // }
      });
  };

  return (
    <SignUpcss>
      {showToast && <Toast />}
      <div className="signupTextBox">
        <h1>Join the Stack Overflow community</h1>
        <div>
          <img src="1.png" alt="question"></img>
          Get unstuck — ask a question
        </div>
        <div>
          <img src="2.png" alt="question"></img>
          Unlock new privileges like voting and commenting
        </div>
        <div>
          <img src="3.png" alt="question"></img>
          Save your favorite tags, filters, and jobs
        </div>
        <div>
          <img src="4.png" alt="question"></img>
          Earn reputation and badges
        </div>
        <div className="text-1">
          <div>
            Collaborate and share knowledge with a private group for FREE.{' '}
            <br />
            Get
          </div>
          <a href="/signup">
            Stack Overflow for Teams free for up to 50 users.
          </a>
        </div>
      </div>
      <div className="loginItemBox">
        <div className="openid-btn-box">
          <div className="goobtn btn">
            <img src="googleLogo.png" alt="googleLogo" />
            Sign up with Google
          </div>
          <div className="gitbtn btn">
            <img src="githubLogo.png" alt="googleLogo" />
            Sign up with GitHub
          </div>
          <div className="facebtn btn">
            <img src="facebookLogo.png" alt="googleLogo" />
            Sign up with Facebook
          </div>
        </div>
        <div id="formContainer">
          <form onSubmit={signupRequestHandler}>
            <div className="display name">
              <span>display name</span>
              <input
                placeholder="email"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              ></input>
              {nameErrorMessage === '' ? null : (
                <p className="errormessage">{nameErrorMessage}</p>
              )}
              {/* <p className="errormessage2">
                The email or password is incorrect.
              </p> */}
            </div>
            <div className="email">
              <span>Email</span>
              <input
                placeholder="email"
                type="text"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
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
              />
              {/* <p className="errormessage2">  The email or password is incorrect./p> */}
              {passwordErrorMessage === '' ? null : (
                <p className="errormessage">{passwordErrorMessage}</p>
              )}
            </div>
            <button className="log btn" type="submit">
              Sign up
            </button>
          </form>
          <div className="text">
            By clicking “Sign up”, you agree to our terms of service, privacy
            policy and cookie policy
          </div>
        </div>

        <div className="help">
          <div>
            Don’t have an account? <a href="/login"> Log in</a>
          </div>
          <div className="mt12">
            Are you an employer?
            <a href="/login"> Sign up on Talent </a>
          </div>
        </div>
      </div>
    </SignUpcss>
  );
}
