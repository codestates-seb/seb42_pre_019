import { LOG_IN, LOG_OUT, SIGN_UP } from './actions';
const initialState = {
  // state 초기값
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...action.payload,
      };
    case LOG_OUT:
      return { ...action.payload };
    case SIGN_UP:
      return {};
    default:
      return state;
    //해당없으면 그냥 반환
  }
};

export default userReducer;
