import styled from 'styled-components';
import '../App.css';
import { useState } from 'react';
// import axios from 'axios';
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
  const [userEmail, setUserEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  // const data = {
  //   userEmail: userEmail,
  //   password: password,
  // };

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
      .post(
        'http://ec2-13-125-250-173.ap-northeast-2.compute.amazonaws.com:8080/users/users/login',
        { data },
        {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      ) //!에러코드 전부 주석처리하면 서버에 요청은 감
      .then((res) => {
        //setUserInfo(res.data); //!응답오면 유저인포 담아주고 ->아직 선언 X
        // setIsLogin(true); //!로그인 여부 true로 변환 ->아직 선언 X
        console.log(res.data);
      })
      .catch((err) => {
        // if (err.response.status === 401) {
        //   setErrorMessage("로그인에 실패했습니다.");
        // }
      });
  };
  return (
    <Logincss>
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
