export const SET_USER_ID = 'SET_USER_ID';

export function setUserId(userInfo) {
  return {
    type: SET_USER_ID,
    payload: userInfo,
  };
}
