//state 들을 보관하는 파일(redux store)
//1. npm install @reduxjs/toolkit react-redux 먼저 설치해야됨.
import { configureStore, createSlice } from '@reduxjs/toolkit'; // 2.import

//3. index.js 파일가서 import { Provider } from "react-redux"; , import store from './store.js' 임포트함
// usestate 역할임, state 하나를 slice 라고 부른다고함.
let reduxSample = createSlice({
  name: 'reduxSample', //'state이름'
  initialState: 'reduxSample입니다.', //'값',
});

export default configureStore({
  reducer: {
    샘플: reduxSample.reducer, //앞에 '샘플 :'  부분은 다른이름으로 작명가능.
  },
});
// 이제 사용할 곳에가서 import { useSelector } from "react-redux" 추가하고 사용하면됨.
