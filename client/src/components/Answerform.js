import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Answerformcss = styled.form`
  padding: 25px;
  width: 60%;
  .ck-toolbar {
    width: 860.4px;
  }
  .ck-editor__editable {
    min-height: 220px;
    width: 844.4px;
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

export default function Answerform(prop) {
  const [body, setBody] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [answerId, setAnswerId] = useState('');
  const profilImage = 'stackoverflowSampleProfile.png'; //Redux
  const questionId = '1111'; //question detail page에서 prop으로 넘겨줘야함
  const displayName = 'asdfasdf'; //Redux
  const userId = 'uadadfasdfasfd'; //Redux
  let score = 0;

  useEffect(() => {
    setAnswerId(Math.random().toString(36).substring(2, 11));
    setCreatedAt(
      new Date(
        new Date().getTime() +
          new Date().getTimezoneOffset() * 60 * 1000 +
          9 * 60 * 60 * 1000
      )
    );
  }, []);

  const handleSubmitt = async (e) => {
    e.preventDefault();

    const answerData = {
      questionId,
      body,
      score,
      createdAt,
      userId,
      answerId,
      profilImage,
      displayName,
    };

    // const answerData = { body };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/test2`, //! 보내면 서버쪽에서 questionId 일치하는 data의 answerId 키의 배열에 넣어줘야함
        answerData
      );
      console.log('Answer submitted successfully:', res.data);
    } catch (err) {
      console.error('Error submitting question:', err);
    }
  };
  return (
    <Answerformcss onSubmit={handleSubmitt}>
      <h2>Your Answer</h2>

      <CKEditor
        editor={ClassicEditor}
        data={body}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setBody(data);
          console.log({ event, editor, data });
          console.log(body);
          //setBody.slice(4, -4) <p>없이 받아올때;
          console.log(body);
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
          answer your question
        </button>
      </div>
    </Answerformcss>
  );
}
