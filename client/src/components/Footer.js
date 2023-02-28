import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footercss = styled.footer`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: hsl(210, 8%, 15%);
  color: hsl(210, 8%, 75%);
  .footerContainer {
    display: flex;
    justify-content: center;
    max-width: 1264px;
    width: 100%;
    box-sizing: border-box;
    flex-flow: row wrap;
    padding: 32px 12px 12px 12px;
    box-sizing: border-box;
  }
  .logo {
    flex: 0 0 64px;
    margin: -12px 0 32px 0;
  }
  nav {
    display: flex;
    flex: 2 1 auto;
    flex-wrap: wrap;
    color: hsl(210, 8%, 60%);
    div {
      padding: 0 12px 24px 0;
      flex: 1 0 auto;
    }
    h5 {
      text-transform: uppercase;
      font-weight: bold;
      margin: 0;
      margin-bottom: 12px;
      color: hsl(210, 8%, 75%);
      line-height: calc(17 / 13);
      text-decoration: none;
      font-size: 100%;
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding-bottom: 5px;
    }
  }
  .copyright {
    flex: 1 1 150px;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    justify-content: space-between;
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        display: list-item;
        margin-right: 10px;
      }
    }
  }
`;

export default function Footer() {
  return (
    <Footercss id="footer">
      <div className="footerContainer">
        <div className="logo">
          <Link to="/">
            <img src="favicon.ico" aria-label="Stack Overflow" />
          </Link>
        </div>
        <nav>
          <div>
            <h5>PRE-PROJECT</h5>
            <ul>
              <li>신송민</li>
              <li>김지현</li>
              <li>한현희</li>
              <li>황금비</li>
              <li>백종민</li>
            </ul>
          </div>
          <div>
            <h5>PRODUCERS</h5>
            <ul>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </div>
          <div>
            <h5>COMPANY</h5>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Work Here</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>Cookie Settings</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h5>STACK EXCHANGE NETWORK</h5>
            <ul>
              <li>Technology</li>
              <li>Culture & recreation</li>
              <li>Life & arts</li>
              <li>Science</li>
              <li>Professional</li>
              <li>Business</li>
              <li>API</li>
              <li>Data</li>
            </ul>
          </div>
        </nav>
        <div className="copyright">
          <ul>
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Git</li>
            <li>Instagram</li>
          </ul>
          <p>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under CC BY-SA. rev 2023.2.27.43260
          </p>
        </div>
      </div>
    </Footercss>
  );
}
