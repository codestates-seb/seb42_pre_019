import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const Header1 = styled.div`
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
    width: 100%;
    z-index: var(--zi-navigation-fixed);
    background-color: white;
    vertical-align: baseline;
    height: 55px;
  `;
  const FirstBox = styled.div`
    border: solid 0.13em hsl(27, 90%, 55%);
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
    height: 50px;

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
      width: 150px;
      height: 30px;
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
    form {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      padding: 1px 8px;
    }
    form > i {
      position: absolute;
      top: 50%;
      margin-top: -7px;
      margin-left: 8px;
      color: hsl(210, 8%, 55%);
    }
    .btn {
      position: relative;
      align-items: center;
      background-color: hsl(205, 46%, 92%);
      border: 1px solid hsl(205, 47%, 42%);
      border-color: hsl(205, 41%, 63%);
      border-radius: 3px;
      color: hsl(205, 47%, 42%);
      padding: 0.8em;
      padding-top: 9px;
      padding-bottom: 9px;
      line-height: 13px;
      font-size: 13px;
      margin-top: 1px;
      text-decoration: none;
      cursor: pointer;
    }
    .signup {
      background-color: hsl(206, 100%, 52%);
      color: white;
      margin: 4px;
      font-weight: 400;
    }
    .minitap {
      display: flex;
      position: relative;
      font-size: 0.8em;
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
  `;

  return (
    <Header1>
      <FirstBox />
      <Headercss>
        <i className="fa-solid fa-bars"></i>
        <img src="logo-stackoverflow.png" alt="logo" />
        <div className="minitap">About</div>
        <div className="minitap">Products</div>
        <div className="minitap">For Teams</div>
        <form>
          <input placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>

        <Link to="/login" className="login btn">
          Log in
        </Link>
        <Link to="/signup" className="signup btn">
          Sign up
        </Link>
      </Headercss>
    </Header1>
  );
}
