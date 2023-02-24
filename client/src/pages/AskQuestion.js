//질문 개별 상세페이지입니다.
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const AskQuestioncss = styled.form`
  padding: 25px;
  width: 60%;
  h1 {
    font-size: 20px;
  }
  .title-input {
    width: 100%;
  }
  .ck-toolbar {
    width: 620.4px;
  }
  .ck-editor__editable {
    min-height: 400px;
    width: 604.4px;
  }
  .titleinput {
    width: 600px;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionData = { title, body };
    try {
      const res = await axios.post(
        'http://localhost:5000/questions',
        questionData
      );
      console.log('Question submitted successfully:', res.data);
    } catch (err) {
      console.error('Error submitting question:', err);
    }
  };

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
            id="title"
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
        data="<p></p>"
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
      {/* <div className="tag">
        {/* <h3>Tags</h3>
        Add up to 5 tags to describe what your question is about.
        <div className="taginput">
          <input
            className="title-input"
            type={'text'}
            placeholder="must include at least one of  (bug feature-request discussion support)"
          ></input>
        </div> */}
      {/* </div>  */}
      <div>
        <button className="writebutton" type="Submit">
          {/* console.log(data) */}
          {/* //onClick={} */}
          post your question
        </button>
        <button
          onClick={() => {
            axios.post('/http://localhost:5000/questions', { name: 'han' });
          }}
        />
        {/* questiondetail로 보내주셈 구현해야함. */}
        {/* <button className="discardbutton" onClick={}>Discard draft</button> */}
      </div>
      {/* 삭제창띄우고 questiion 페이지로이동? */}
    </AskQuestioncss>
  );
}
