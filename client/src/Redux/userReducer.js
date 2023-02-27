import { LOG_IN, LOG_OUT } from './actions';
const initialState = {
  // state 초기값
  isLogin: false,
};

const userReducer = (state = { ...initialState }, action) => {
  {
    if (action.type === LOG_IN)
      //액션이름 불러옴
      return { ...action.payload };
    if (action.type === LOG_OUT)
      //액션이름 정하고
      return { ...action.payload };
    else return state;
    //해당없으면 그냥 반환
  }
};

export default userReducer;
