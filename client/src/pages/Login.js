import styled from 'styled-components';
import '../App.css';

export default function Login() {
  const Logincss = styled.div`
    /* background-color: red; */
    background-color: hsl(210, 8%, 95%);
    position: absolute;
    width: 100%;
    height: 100vh;
    /* height: calc(100% - 50px); */
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
        font-weight: 500;
        padding: 1em;
      }
      span {
        padding: 0px 0px 10px 0px;
        font-size: 1.2em;
        font-weight: bolder;
      }
      .errormessage {
        margin-top: 4px;
        color: red;
        font-size: 0.9em;
      }
      .errormessage2 {
        display: none;
        margin-top: 4px;
        color: red;
        font-size: 0.9em;
      }
    }
  `;
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
          <form>
            <div className="email">
              <span>Email</span>
              <input></input>
              <p className="errormessage">
                The email is not a valid email address.
              </p>
              <p className="errormessage2">
                The email or password is incorrect.
              </p>
            </div>
            <div className="password">
              <span>Password</span>
              <input></input>
            </div>
            <div className="log btn">Log in</div>
          </form>
        </div>
      </div>
    </Logincss>
  );
}
