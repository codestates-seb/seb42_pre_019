//질문 개별 상세페이지입니다.
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

export default function AskQuestion() {
  const AskQuestioncss = styled.div`
    padding: 25px;
    width: 60%;
    h1 {
      font-size: 20px;
    }
    .inputcss {
      width: 100%;
    }
    .ck-toolbar {
      width: 620.4px;
    }
    .ck-editor__editable {
      min-height: 400px;
      width: 603.4px;
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
  // const [questionVote, setQuestionVote] = useState(0);
  // const [answer, setAnswer] = useState();
  // const [views, setViews] = useState();

  return (
    <AskQuestioncss>
      <h1>Ask a public question</h1>
      <div className="titleinput">
        <h3>Title</h3>
        Be specific and imagine you’re asking a question to another person.
        <div>
          <input
            className="inputcss"
            type={'text'}
            placeholder="what's your bug, feature request, or meta-discussion topic? Be specific"
          ></input>
        </div>
        <h3>Body</h3>
        Include all the information someone would need to answer your question
      </div>
      <CKEditor
        editor={ClassicEditor}
        data="<p></p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      <div className="tag">
        <h3>Tags</h3>
        Add up to 5 tags to describe what your question is about.
        <div className="taginput">
          <input
            className="inputcss"
            type={'text'}
            placeholder="must include at least one of  (bug feature-request discussion support)"
          ></input>
        </div>
      </div>
      <div>
        <button className="writebutton">post your question</button>
        <button className="discardbutton">Discard draft</button>
      </div>
    </AskQuestioncss>
  );
}
