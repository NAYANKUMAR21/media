import axios from 'axios';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
} from '../types/type';

export const Login = (cred) => async (dispatch, state) => {
  try {
    dispatch({ type: AUTH_LOGIN_LOADING });
    const res = await axios.post('https://reqres.in/api/login', cred);
    console.log(res);
    dispatch({ type: AUTH_LOGIN, payload: res.data.token });
    return;
  } catch (er) {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};
