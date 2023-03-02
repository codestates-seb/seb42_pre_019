/* eslint-disable */
//질문 개별 상세페이지입니다.
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AskQuestioncss = styled.form`
  padding: 25px;
  width: 820.4px;
  h1 {
    font-size: 20px;
  }
  .title-input {
    width: 100%;
  }
  .ck-toolbar {
    width: 820.4px;
  }
  .ck-editor__editable {
    min-height: 400px;
    width: 804.4px;
  }
  .titleinput {
    width: 800px;
  }
  .taginput {
    width: 600px;
  }
  .writebutton {
    margin-top: 10px;
    border-radius: 5px;
    background: #0c8aff;
    color: white;
    height: 4vh;
  }
  .discardbutton {
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 5px;
    border: none;
    background: none;
    color: red;
    height: 4vh;
  }
`;

export default function AskQuestion() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [questionId, setQuestionId] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [answerId, setAnswerId] = useState([]);
  const profilImage = 'stackoverflowSampleProfile.png'; //Redux
  const displayName = 'Jihyun KIm'; //Redux
  const userId = 1; //Redux
  let score = 0;

  useEffect(() => {
    setQuestionId(Math.random().toString(36).substring(2, 11));
    setCreatedAt(
      new Date(
        new Date().getTime() +
          new Date().getTimezoneOffset() * 60 * 1000 +
          9 * 60 * 60 * 1000
      )
    );
    setAnswerId(['']);
    // const fetchUserId = async () => {
    //   try {
    //     const res = await axios.get(`${process.env.REACT_APP_API_KEY}/users`);
    //     setUserId(res.data.userId);
    //   } catch (err) {
    //     console.error('Error fetching user ID:', err);
    //   }
    // };
    // fetchUserId();
  }, []);
  // redux로 관리 ...userId,profilImg
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(questionId);
    const questionData = {
      questionId,
      title,
      body,
      score,
      createdAt,
      userId,
      answerId,
      profilImage,
      displayName,
    };
    try {
      // const res = await axios.post('/board/write', questionData);
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/questions`,
        questionData
      );
      console.log('Question submitted successfully:', res.data);
      console.log(questionData);
    } catch (err) {
      console.error('Error submitting question:', err);
      console.log(questionData);
    }
  };

  // let a = useSelector((state) => {
  //   return state;
  // });
  return (
    <AskQuestioncss onSubmit={handleSubmit}>
      <h1>Ask a public question</h1>
      <div className="titleinput">
        <h3>Title</h3>
        Be specific and imagine you’re asking a question to another person.
        <div>
          <input
            className="title-input"
            type={'text'}
            placeholder="what's your bug, feature request, or meta-discussion topic? Be specific"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              console.log(title);
            }}
          ></input>
        </div>
        <h3>Body</h3>
        Include all the information someone would need to answer your question
      </div>
      <CKEditor
        editor={ClassicEditor}
        data={body}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData(); //.slice(4, -4));
          setBody(data);

          console.log(body);
          // let data2 = data.slice(4, -4); //p태그 없앨 경우 사용.
          // console.log(data2);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      <div>
        <button className="writebutton" type="Submit">
          post your question
        </button>
      </div>
    </AskQuestioncss>
  );
}
