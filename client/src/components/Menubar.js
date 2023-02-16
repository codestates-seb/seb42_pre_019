import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Menubar() {
  const Menubarcss = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: solid 1px red;
    height: 85vh;
    width: 164px;
    padding-top: 24px;
    ol {
      list-style: none;
      padding-inline-start: 20px;
    }
    li {
      height: 26px;
      width: 152px;
    }
    div {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      margin: 20px;
    }
    div > * {
      padding: 4px 4px 4px 30px;
    }
  `;

  return (
    <Menubarcss>
      <ol>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>PUBLIC</li>
        <li>
          <ol>
            <li>
              <Link to="/questions">Questions</Link>
            </li>
            <li>
              <Link to="/tags">Tags</Link>
            </li>

            <li>
              <Link to="/users">Users</Link>
            </li>
          </ol>
        </li>
      </ol>
    </Menubarcss>
  );
}
