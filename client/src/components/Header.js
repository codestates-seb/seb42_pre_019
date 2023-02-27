import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

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
`;

export default function Header() {
  const isLogin = useSelector((store) => store.userReducer.isLogin); //! state 꺼냄
  const dispatch = useDispatch();
  console.log(isLogin);
  dispatch();
  return (
    <Header1>
      <Headercss>
        <Link to="/">
          <img src="logo-stackoverflow.png" alt="logo" />
        </Link>
        <div className="minitap">About</div>
        <div className="minitap">Products</div>
        <div className="minitap">For Teams</div>
        <form>
          <input placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
        <nav>
          {isLogin ? (
            <div>ss</div>
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
        </nav>
      </Headercss>
    </Header1>
  );
}
