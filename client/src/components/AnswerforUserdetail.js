import styled from 'styled-components';
import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import HTMLPrinter from '../components/HTMLprinter';

/* eslint-disable */

const AnswerCover = styled.div`
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

export default function AnswerforUserDetail(props) {
  //변경
  const [questionAnswerData, setQuestionAnswerData] = useState(); //!QuestionId로 Answer요청
  useEffect(() => {
    // console.log(propQuesionid);
    axiosAnswerbyQuestionId(props.propUserid); //변경
  }, []);
  function axiosAnswerbyQuestionId(id) {
    return axios
      .get(`http://localhost:5000/answers?userId=${id}`, {
        //변경
        'Content-Type': 'application/json',
      })
      .then((res) => {
        setQuestionAnswerData(res.data);
        console.log('questionAnswerData');
        console.log(questionAnswerData);
      })
      .catch((err) => {
        console.log('questionAnswerData GET error');
      });
  }

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

  const [answerScore, setAnswerScore] = useState(answer.score);

  return (
    <AnswerCover>
      {Array.isArray(questionAnswerData) &&
        questionAnswerData.map((el) => {
          return (
            <div>
              <div className="answer-body">
                {/* <div className="score">
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    style={{ height: '30px', color: 'darkgrey' }}
                  />
                  {el.score}
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ height: '30px', color: 'darkgrey' }}
                  />
                </div> */}

                <HTMLPrinter htmlString={el.body} />
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
    </AnswerCover>
  );
}
