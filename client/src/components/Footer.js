import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footercss = styled.footer`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  background-color: hsl(210, 8%, 15%);
  color: hsl(210, 8%, 75%);
  .footerContainer {
    display: flex;
    justify-content: center;
    width: 1264px;
    box-sizing: border-box;
    border: solid 1px red;
    padding: 32px 12px 12px 12px;
    height: 150px;
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
            <h5>STACK OVERFLOW</h5>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h5>PRODUCERS</h5>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h5>FRONT-END</h5>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h5>BACK-END</h5>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </nav>
        <div className="copyright"></div>
      </div>
    </Footercss>
  );
}
