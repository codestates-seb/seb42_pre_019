import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Nav = styled.nav`
  position: sticky;
  width: auto;
  top: 50px;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 8px;
  margin-bottom: 10px;
  left: 0px;
  padding-top: 24px;
  color: hsl(210, 8%, 25%);
  list-style: none;
  ol {
    list-style: none;
    padding-left: 20px;
    margin: 0px;
  }
  li {
    height: 26px;
    width: 152px;
    /* padding-inline-start: 20px; */
    padding: 4px 4px 4px 0px;
  }
  img {
    object-fit: cover;
    width: 100%;
    padding-left: 4px;
  }
`;

export default function Menubar() {
  return (
    <Nav>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>PUBLIC</li>
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

      <li>
        <img src="menubar-img.png" alt="img" />
      </li>
    </Nav>
  );
}
