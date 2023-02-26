// import { SET_USER_ID } from './actions';
const initialState = {
  // state 초기값
  userId: 'aaa12345',
  displayName: '샘플이름',
  profileImg: 'stackoverflowSampleProfile.png',
};

export default function userReducer(state = initialState, action) {
  {
    if (action.type === 'SET_USER_ID')
      //액션이름 정하고
      return {
        ...state,
        userId: action.payload.userId, //어떻게 state 변화할지 정함
        displayName: action.payload.displayName,
        profileImg: action.payload.profileImg,
      };
    else {
      return state;
    } //해당없으면 그냥 반환
  }
}
