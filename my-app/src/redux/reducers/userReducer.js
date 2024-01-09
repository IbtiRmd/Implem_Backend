import {
    LOGIN_USER_FAILED,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
  } from "../types/user";
  
  const initialState = {
    token: "",
    user: null,
    loading: false,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_USER_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          loading: false,
          token: action.payload.token,
          user: action.payload.user,
        };
      case LOGIN_USER_FAILED:
        return {
          ...state,
          loading: false,
        };
  
      case LOGOUT_USER:
        return {
          ...state,
          token: "",
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;