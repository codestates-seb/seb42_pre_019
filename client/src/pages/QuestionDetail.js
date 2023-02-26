import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import AnswerforQuestionDetail from '../components/AnswerforQuestionDetail';
import axios from 'axios';
import AnswerForm from '../components/Answerform'; //요기 F 대문자로 수정 및 아래 주석해제(에러해결3) 해결시 삭제요망.

// import AnswerForm from '../components/AnswerForm';

/* eslint-disable */

const Question = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  .question-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-content: space-evenly; */
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
  // const [questionData, setQuestionData] = useState('초기값');

  const [data, setData] = useState({});
  function questionAxios(qusetionid) {
    return axios
      .get(`http://localhost:5000/questions?questionId=${qusetionid}`, {
        'Content-Type': 'application/json',
      })
      .then((res) => {
        // const data2 = res.data;
        // console.log(res.data);
        console.log(res.data['0']); //! 얘가 우리가 원하는 객체 형태
        // console.log(data2);
        // console.log(`data2: ${data2}`);
        // console.log(`data: ${questionData}`);
        setData(res.data['0']);
      })
      .catch((err) => {
        console.log('Quesion GET error');
      });
  }
  //! 여기서 나오는 1111이 질문 번호 -> 이 번호에따라 주소값 달라짐 ->https://stackoverflow/question/1111
  const propQuesionid = 1111;
  useEffect(() => {
    questionAxios(propQuesionid);
    scoreSetting(data.score);
  }, []);

  const [questionScore, setQuestionScore] = useState(data.score);
  function scoreSetting(n) {
    setQuestionScore(n);
    console.log(`score ${questionScore}`);
  }
  //!처음에 data받아온 값으로 score 초기지정

  const handleScoreChange = (score, id) => {
    //!onClick에 따라 state 변화시키며 동시에 데이터 전송?
    //!answer을 전부 가져와서 각각 id , score를 넘겨줌
    //!데이터 받을때 어떻게 받나 ... questionDetail에서 한번에 가능? 아니면 question따로 , 해당하는 Answer따로 ?
  };

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
              // onClick={scorePlus()}
            />
            {questionScore}
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ height: '30px', color: 'darkgrey' }}
            />
          </div>

          <div>{data.body}</div>
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
      {/* <AnswerForm /> */}
    </div>
  );
}
