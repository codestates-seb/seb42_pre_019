import styled from 'styled-components';
import Dummyq from './dummyq';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useState } from 'react';

const Qmain = styled.div`
  .qcss {
    margin-left: 30px;
  }
  h1 {
    font-size: 27px;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  .qcss {
    margin-top: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .askbutton {
    margin-right: 11px;
    font-size: 14px;
    background: #0d0d0e;
    color: #f6f6f6;
    width: 100px;
    height: 5vh;
    border-radius: 5px;
  }
  .sort {
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .ql {
    display: flex;
    flex-direction: row;
  }
  ul {
    list-style: none;
    padding-left: 0px;
    display: flex;
    flex-direction: row;

    border: 2px solid black;
    border-radius: 4px;
    background: #ffffff;
  }

  li {
    list-style: none;
  }

  .li1 {
    border-right: 2px solid black;
    padding: 8px;
  }
  .rightli {
    border-right: none;
  }
  .filter {
    background: #e3e6e8;
    width: 57px;
    height: 33px;
    margin: 10px;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .leftli {
    }
  }
`;
export default function Questions() {
  const [queCount, setQueCount] = useState(0);
  useEffect(() => {
    axios
      .get('/questions')
      .then((res) => {
        setQueCount(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Qmain>
      <div className="qcss">
        <h1>All Questions</h1>
        <button className="askbutton">
          <Link to="/askquestion">AskQuestion</Link>
        </button>
      </div>
      <div className="sort">
        <h3>{queCount} Questions</h3>
        <nav className="ql">
          <ul>
            <li className="li1 leftli">Newest</li>
            <li className="li1">Active</li>
            <li className="li1">Unanswered</li>
            <li className="li1">Frequent</li>
            <li className="li1 rightli">More</li>
          </ul>
          <button className="filter">
            <img className="filterimg" src="filter.png" alt="filter(1).png" />
            Filter
          </button>
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
