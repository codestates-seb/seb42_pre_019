import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Menubar() {
  const Menubarcss = styled.div`
    position: sticky;
    display: block;
    width: auto;
    flex-direction: column;
    align-items: flex-start;
    height: 300px;
    left: 0px;
    padding-top: 10px;
    background-color: white;
    box-sizing: border-box;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
    z-index: 999;
    color: hsl(210, 8%, 25%);
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
          <li>COLLECTIVES</li>
          <ol>
            <li>Explore Collectives</li>
          </ol>
          <li>TEAMS</li>
        </li>
      </ol>
    </Menubarcss>
  );
}
