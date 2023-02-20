import styled from 'styled-components';
import Dummyq from './dummyq';
import { Link } from 'react-router-dom';

export default function Questions() {
  const Qmain = styled.div`
    display: flex;
    flex-direction: column;
    .qcss {
      margin-top: 20px;
      font-size: 35px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .askbutton {
      font-size: 18px;
      background: black;
      color: white;
      width: 18vw;
      height: 5vh;
      border-radius: 5px;
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

      <Dummyq />
      <Dummyq />
      <Dummyq />
      <Dummyq />
      <Dummyq />
    </Qmain>
  );
}
