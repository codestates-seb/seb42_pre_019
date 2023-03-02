export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const QUESTION_DETAIL = 'QUESTION_DETAIL';

export const loginAction = (data) => {
  return {
    type: LOG_IN,
    payload: { ...data, isLogin: true },
  };
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
    payload: { isLogin: false },
  };
};

export const signupAction = () => {
  return {
    type: SIGN_UP,
  };
};

export const questionDetailAction = (res) => {
  return {
    type: QUESTION_DETAIL,
    payload: res,
  };
};
