import {loginCheck, loginUser} from '../api/user';

export const GET_TRANSLATIONS = 'GET_TRANSLATIONS';
export const CHECK_AUTH = 'CHECK_AUTH';
export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

export function getTranslations() {
  return {
    type: GET_TRANSLATIONS,
  };
}

export function checkAuth() {
  return async (dispatch) => {
    dispatch({
      type: CHECK_AUTH,
    });

    const user = await loginCheck();
    if (user) {
      dispatch(authSuccess(user));
    } else {
      dispatch(authError())
    }
  };
}

export function authenticate(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
    });

    try {
      const user = await loginUser(data);
      dispatch(authSuccess(user));
    } catch(e) {
      dispatch(authError());
      throw e;
    }
  }
}

function authSuccess(user) {
  return {
    type: AUTH_SUCCESS,
    profile: user,
  }
}

function authError() {
  return {
    type: AUTH_ERROR,
  }
}
