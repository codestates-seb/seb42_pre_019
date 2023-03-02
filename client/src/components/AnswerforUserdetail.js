import styled from 'styled-components';
import { useEffect, useState } from 'react';

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

      padding-right: 15px;
    }
  }

  .answer-bottom {
    justify-content: space-between;

    display: flex;
    margin-top: 16px;
    padding-bottom: 4px;
    .answer-user-card {
      padding: 7px;
      width: 160px;
    }
    .answer-profile {
      height: 35px;
    }
  }
`;

export default function AnswerforUserDetail(props) {
  const [questionAnswerData, setQuestionAnswerData] = useState(); //!QuestionId로 Answer요청
  useEffect(() => {
    axiosAnswerbyQuestionId(props.propUserid);
  }, []);
  function axiosAnswerbyQuestionId(id) {
    return axios
      .get(`http://localhost:5000/answers?userId=${id}`, {
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
      {Array.isArray(questionAnswerData) &&
        questionAnswerData.map((el) => {
          return (
            <div>
              <div className="answer-body">
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
