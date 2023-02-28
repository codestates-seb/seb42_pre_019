/* eslint-disable */
import styled from 'styled-components';
import Dummyq from './dummyq';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, React } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import HTMLPrinter from '../components/HTMLprinter';

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

const Qdiv = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgrey;

  .vav {
    display: flex;
    flex-direction: raw;
    display: flex;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 25px;
  }
  .middlecontent {
    margin-left: 20px;
  }
  .middletitle {
    font-size: 17px;
    margin-top: 10px;
    text-decoration-line: none;
    color: #0074cc;
  }
  .middledetail {
    font-size: 13px;
    margin-top: 10px;
  }
  .count {
    margin-right: 10px;
    font-size: 13px;
  }
  span {
    margin: 3px;
    font-size: 13px;
  }

  .tag {
    margin: 0px 5px 2px 0px;
    padding: 4.8px 6px;
    font-size: 12px;
    border-radius: 4px;
    background: #dde9f2;
    color: #326892;
  }
  .bottominfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 25px;
    margin-top: 10px;
  }
  .bottomright {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-right: 20px;
  }
  .avatar {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  .userrepu {
    font-weight: bold;
    margin-right: 3px;
  }
`;
const Quser = styled.a`
  color: hsl(0deg 100% 39%);
`;

export default function Questions() {
  const state = useSelector((state) => state); //! state 꺼내오기 hook
  const parser = new DOMParser(); //! HTML 처리

  const [questionsData, setQuestionsData] = useState('1');
  function questionsAxios() {
    return axios
      .get(`${process.env.REACT_APP_API_KEY}/questions`, {
        'Content-Type': 'application/json',
      })

      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        setQuestionsData(res.data);
      })
      .catch((err) => {
        console.log('questionsAxios GET error');
      });
  }

  useEffect(() => {
    questionsAxios();
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
        <h3> {questionsData.length}Questions</h3>
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
      {Array.isArray(questionsData) &&
        questionsData.map((el) => (
          <Qdiv key={el.questionId}>
            <div className="vav">
              <div className="count">
                {el.score}
                <span>votes</span>
              </div>
              <div className="count">
                {el.answerId.length}
                <span>answers</span>
              </div>
            </div>
            <div className="middlecontent">
              <Link to={`/questions/${el.questionId}`} className="middletitle">
                {el.title}
              </Link>
              <div className="middledetail">
                <HTMLPrinter htmlString={el.body} />
              </div>
              <div className="bottominfo">
                <span className="bottomleft"></span>
                <span className="bottomright">
                  <Quser />
                  <img className="avatar" src={el.profileImg} alt="profile" />
                  <div className="userrepu">{el.displayName} </div>
                  <div className="writetime"> asked {el.createdAt}</div>
                </span>
              </div>
            </div>
          </Qdiv>
        ))}
    </Qmain>
  );
}
