import styled from 'styled-components';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
/* eslint-disable */

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  > h2 {
    font-weight: 500;
  }
  .answer-body {
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    .score {
      font-size: 17px;
      /* font-weight: bold; */
      padding-right: 15px;
    }
  }

  .answer-bottom {
    justify-content: space-between;

    display: flex;
    margin-top: 16px;
    padding-bottom: 4px;
    .answer-user-card {
      /* background-color: #ceddde; */
      padding: 7px;
      width: 160px;
    }
    .answer-profile {
      height: 35px;
    }
  }
`;

export default function answer() {
  const answer = [
    //! 임시 더미데이터
    {
      answerId: 3333,
      userId: 2,
      questionId: 1111,
      displayName: 'aaaaa',
      body: `i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...`,
      score: 3,
      createdAt: '2023.02.23.11:11',
      profileImg: 'stackoverflowSampleProfile.png',
    },
    {
      answerId: 4444,
      userId: 3,
      questionId: 1111,
      displayName: 'bbbbbbbbbbbb',
      body: `1234123413412341234123412341234123421341341234213412341234@@@@@@@@@@@@@@@@@@@@@@@@@i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...i don't know...`,
      score: 3,
      createdAt: '2023.02.23.11:12',
      profileImg: 'stackoverflowSampleProfile.png',
    },
  ];

  const [answerData, setAnswerData] = useState(''); //요청을 어떤식으로 보낼건지에 따라 달라짐
  const [answerScore, setAnswerScore] = useState(answer.score);

  return (
    <Answer>
      <h2>{answer.length} Answers</h2>
      {answer.map((el) => {
        return (
          <div>
            <div className="answer-body">
              <div className="score">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  style={{ height: '30px', color: 'darkgrey' }}
                />
                {el.score}
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ height: '30px', color: 'darkgrey' }}
                />
              </div>
              <div>{el.body}</div>
            </div>
            <div className="answer-bottom">
              <div>
                <button>Edit</button>
              </div>
              <div className="answer-user-card">
                <div>answered {el.createdAt}</div>
                <div>
                  <img
                    className="answer-profile"
                    src={el.profileImg}
                    alt="Profile"
                  ></img>{' '}
                  , {el.displayName}{' '}
                </div>
              </div>{' '}
            </div>
          </div>
        );
      })}
    </Answer>
  );
}
