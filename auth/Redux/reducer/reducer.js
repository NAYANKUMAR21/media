import {
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGOUT,
} from '../types/type';

const initalState = {
  loading: false,
  error: false,
  data: {
    token: null,
    isAuth: false,
  },
};

export const AuthReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          token: payload,
          isAuth: true,
        },
      };
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          token: null,
          isAuth: false,
        },
      };
    }
    case AUTH_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
