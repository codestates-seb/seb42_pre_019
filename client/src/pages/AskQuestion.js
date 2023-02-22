//질문 개별 상세페이지입니다.
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

const AskQuestioncss = styled.div`
  padding: 25px;
  width: 60%;
  h1 {
    font-size: 20px;
  }
  .inputcss {
    width: 80%;
  }
  .ck-editor__editable {
    min-height: 400px;
  }
`;

export default function AskQuestion() {
  return (
    <AskQuestioncss>
      <h1>Ask a public question</h1>
      <div className="">
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
        data="<p>Hello from CKEditor 5!</p>"
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
    </AskQuestioncss>
  );
}
