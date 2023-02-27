export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const loginAction = (userInfo) => {
  const payload = {
    isLogin: true,
    ...userInfo,
  };
  return {
    type: LOG_IN,
    payload,
  };
};

export const logoutAction = () => {
  const payload = {
    isLogin: false,
  };
  return {
    type: LOG_OUT,
    payload,
  };
};
