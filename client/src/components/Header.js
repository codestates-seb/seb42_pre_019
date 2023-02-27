/* eslint-disable */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';
import Logout from '../pages/Logout';

const Header1 = styled.header`
  position: fixed !important;
  display: flex;
  top: 0;
  min-width: auto;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  width: 100%;
  z-index: 5050;
  background-color: hsl(210, 8%, 97.5%);
  height: 50px;
  box-sizing: border-box;
  border-top: 3px solid hsl(27, 90%, 55%);
`;
const Headercss = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 47px;

  .fa-bars {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 100%;
    font-size: 100%;
    padding: 0px 16px;
  }
  img {
    display: flex;
    align-items: center;
    padding: 0 8px;
    width: 148px;
    height: 28px;
  }

  input {
    position: relative;
    width: 100%;
    padding: 0.7em;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    padding-left: 32px;
  }
  input::placeholder {
    color: hsl(210, 8%, 60%);
    font-family: 'system-ui', 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans',
      sans-serif;
  }
  form {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    padding: 1px 8px;
  }
  form > i {
    position: absolute;
    top: 50%;
    margin-top: -8px;
    margin-left: 0.5em;
    color: hsl(210, 8%, 55%);
    font-size: 1rem;
  }
  .login {
    padding-top: 7px;
    padding-bottom: 7px;
  }
  .signup {
    background-color: hsl(206, 100%, 52%);
    color: white;
    margin: 4px;
    font-weight: 400;
    padding-top: 7px;
    padding-bottom: 7px;
  }
  .minitap {
    display: flex;
    position: relative;
    text-decoration: none;
    color: hsl(210, 8%, 35%);
    padding: 6px 12px;
    border: none;
    border-radius: 1000px;
    cursor: pointer;
  }
  .minitap:hover {
    background-color: hsl(210, 8%, 90%);
    color: hsl(210, 8%, 25%);
  }
  button {
    all: unset;
  }
  .logonbar {
    display: flex;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    padding-right: 12px;
    height: 100%;
    a {
      color: hsl(210, 8%, 35%);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      text-decoration: none;
      position: relative;
      cursor: pointer;
    }
    a > img {
      width: 20px;
      height: 20px;
      margin: 0;
      padding: 0;
      filter: invert(33%) sepia(11%) saturate(418%) hue-rotate(169deg)
        brightness(95%) contrast(87%);
    }
  }
  ol {
    display: flex;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li:hover {
    background-color: hsl(210, 8%, 90%);
  }
  .imges {
    width: 28px;
    height: 28px;
    padding: 0px;
    padding-right: 8px;
  }
  .olol > ol {
    gap: 4px;
  }
`;

export default function Header() {
  const [logoutPage, setLogoutPage] = useState(false);
  const isLogin = useSelector((state) => state.isLogin);
  const handleLogout = () => {
    setLogoutPage(!logoutPage);
  };
  return (
    <Header1>
      <Headercss>
        <Link to="/">
          <img src="logo-stackoverflow.png" alt="logo" />
        </Link>
        {isLogin ? (
          <div className="minitap">Products</div>
        ) : (
          <>
            <div className="minitap">About</div>
            <div className="minitap">Products</div>
            <div className="minitap">For Teams</div>
          </>
        )}

        <form>
          <input placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>

        {isLogin ? (
          <nav className="logonbar">
            <ol>
              <li>
                <a to="#">
                  <div>
                    <img src="profileImg/1.png" alt="avata" className="imges" />
                  </div>

                  <div className="olol">
                    <ol>
                      <li style={{ fontWeight: 'bold' }}>1</li>
                      <li style={{ color: '#ab825f' }}>● 2</li>
                    </ol>
                  </div>
                </a>
              </li>
              <li>
                <a to="#">
                  <img src="headerMenu1.png" alt="dox" />
                </a>
              </li>
              <li>
                <a to="#">
                  <img src="headerMenu2.png" alt="tropy" />
                </a>
              </li>
              <li>
                <a to="#">
                  <img src="headerMenu3.png" alt="qeustion" />
                </a>
              </li>
              <li>
                <a onClick={handleLogout}>
                  <img src="headerMenu4.png" alt="logout" />
                </a>
                {logoutPage ? <Logout /> : null}
              </li>
            </ol>
          </nav>
        ) : (
          <div>
            <Link to="/login" className="login btn">
              Log in
            </Link>
            <Link to="/signup" className="signup btn">
              Sign up
            </Link>
          </div>
        )}
      </Headercss>
    </Header1>
  );
}
