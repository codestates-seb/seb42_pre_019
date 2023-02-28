/* eslint-disable */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import AnswerforQuestionDetail from '../components/AnswerforQuestionDetail';
import axios from 'axios';
import HTMLPrinter from '../components/HTMLprinter';

import AnswerForm from '../components/Answerform';
/* eslint-disable */
const Question = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  .question-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > h1 {
      font-weight: 500;
      font-size: large;
      padding-bottom: 20px;
    }
    .askbutton {
      font-size: 14px;
      background: hsl(206, 100%, 52%);
      width: 100px;
      height: 35px;
      border-radius: 3px;
      border: solid 1px navy;
      padding-top: -8px;
      text-align: center;
      line-height: 35px;

      .link {
        text-decoration: none;
        color: white;
      }
    }
  }

  .question-info {
    color: grey;
    padding-bottom: 15px;
    border-bottom: solid 1px darkgray;
    > span {
      color: black;
      font-weight: bold;
    }
  }

  .question-body {
    display: flex;
    flex-direction: row;
    padding-top: 15px;
    .score {
      font-size: 17px;
      padding-right: 15px;
    }
  }
  .question-bottom {
    justify-content: space-between;

    display: flex;
    margin-top: 16px;
    padding-top: 4px;
    .ask-user-card {
      background-color: #ceddde;
      padding: 7px;
      width: 160px;
    }
    .question-profile {
      height: 35px;
    }
  }
`;

export default function QuestionDetail() {
  const [data, setData] = useState({});
  function questionAxios(questionid) {
    return axios
      .get(
        `${process.env.REACT_APP_API_KEY}/questions?questionId=${questionid}`,
        {
          'Content-Type': 'application/json',
        }
      )
      .then((res) => {
        console.log(res.data['0']); //! 얘가 우리가 원하는 객체 형태
        setData(res.data['0']);
      })
      .catch((err) => {
        console.log('Quesion GET error');
      });
  }

  const propQuesionid = useParams().questionId;

  useEffect(() => {
    questionAxios(propQuesionid);
  }, []);

  return (
    <div>
      <Question>
        <div className="question-title">
          <h1>{data.title}</h1>
          <div className="askbutton">
            <Link to="/askquestion" className="link">
              AskQuestion
            </Link>
          </div>
        </div>
        <div className="question-info">
          {' '}
          Asked <span> {data.createdAt}</span>
        </div>
        <div className="question-body">
          <div className="score">
            <FontAwesomeIcon
              icon={faCaretUp}
              style={{ height: '30px', color: 'darkgrey' }}
            />
            <div>{data.score}</div>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ height: '30px', color: 'darkgrey' }}
            />
          </div>
          <HTMLPrinter htmlString={data.body} />
        </div>
        <div className="question-bottom">
          <div>
            <button>Edit</button>
          </div>
          <div className="ask-user-card">
            <div>asked {data.createdAt}</div>
            <div>
              <img
                className="question-profile"
                src={data.profileImg}
                alt="Profile"
              ></img>{' '}
              {data.displayName}{' '}
            </div>
          </div>
        </div>
      </Question>
      <AnswerforQuestionDetail propQuesionid={propQuesionid} />
      <AnswerForm />
    </div>
  );
}
