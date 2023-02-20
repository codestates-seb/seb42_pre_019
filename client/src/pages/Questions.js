import styled from 'styled-components';
import Dummyq from './dummyq';
import { Link } from 'react-router-dom';

export default function Questions() {
  const Qmain = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 80%;
    .qcss {
      margin-top: 20px;
      font-size: 35px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .askbutton {
      font-size: 14px;
      background: black;
      color: white;
      width: 12vw;
      height: 5vh;
      border-radius: 5px;
    }
    .sort {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .ql {
      display: flex;
      flex-direction: row;
    }
    .ql2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border: 2px solid black;
      border-radius: 4px;
    }
    li {
      list-style: none;
    }

    .li1 {
      border-right: 2px solid black;
      padding: 8px;
    }
    .li2 {
      padding: 8px;
    }
    .filter {
      background: lightgrey;
      margin: 10px;
      border-radius: 3px;
      .leftli {
      }
    }
  `;
  return (
    <Qmain>
      <div className="qcss">
        <div>All Questions</div>
        <button className="askbutton">
          <Link to="/askquestion">AskQuestion</Link>
        </button>
      </div>
      <div className="sort">
        <h3>48,296 questions</h3>
        <nav className="ql">
          <ul className="ql2">
            <li className="li1 leftli">Newest</li>
            <li className="li1">Active</li>
            <li className="li1">Unanswered</li>
            <li className="li1">Frequent</li>
            <li className="li2">More</li>
          </ul>
          <button className="filter">Filter</button>
        </nav>
      </div>

      <Dummyq />
      <Dummyq />
      <Dummyq />
      <Dummyq />
      <Dummyq />
    </Qmain>
  );
}
