import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { useState } from 'react';
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
export default function Answerform() {
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answerData = { body };
    try {
      const res = await axios.post(
        'http://localhost:5000/questions',
        answerData
      );
      console.log('Question submitted successfully:', res.data);
    } catch (err) {
      console.error('Error submitting question:', err);
    }
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
          setBody(data);
          console.log({ event, editor, data });

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
