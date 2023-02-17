//질문 개별 상세페이지입니다.
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

export default function AskQuestion() {
  const AskQuestioncss = styled.div`
    h1 {
      font-size: 20px;
    }
  `;
  return (
    <AskQuestioncss>
      <h1>Ask a public question</h1>
    </AskQuestioncss>
  );
}
