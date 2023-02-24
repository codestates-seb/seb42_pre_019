import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
// import { useState } from 'react';

const Answerformcss = styled.div`
  padding: 25px;
  width: 60%;
  .ck-toolbar {
    width: 620.4px;
  }
  .ck-editor__editable {
    min-height: 400px;
    width: 604.4px;
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
export default function Answerform() {
  // const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Answerformcss onSubmit={handleSubmit}>
      <h2>Your Answer</h2>

      <CKEditor
        editor={ClassicEditor}
        data="<p></p>"
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          //let data2 = data.slice(4, -4);
          //console.log(data2);
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
          {/* console.log(data) */}
          {/* //onClick={} */}
          post your question
        </button>
        {/* questiondetail/???번째글에 추가해주세요 구현해야함. */}
      </div>
    </Answerformcss>
  );
}
