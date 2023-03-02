import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import HTMLPrinter from './HTMLprinter';

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

export default function AnswerforQuestionDetail(props) {
  const [questionAnswerData, setQuestionAnswerData] = useState(); //!QuestionId로 Answer요청
  useEffect(() => {
    // console.log(propQuesionid);
    axiosAnswerbyQuestionId(props.propQuesionid);
  }, []);
  function axiosAnswerbyQuestionId(id) {
    return axios
      .get(`http://localhost:5000/answers?questionId=${id}`, {
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

  return (
    <AnswerCover>
      <h2>
        {Array.isArray(questionAnswerData) && questionAnswerData.length} Answers
      </h2>
      {Array.isArray(questionAnswerData) &&
        questionAnswerData.map((el) => {
          return (
            <div key={el.AnswerId}>
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
