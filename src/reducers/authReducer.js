import { AUTH_LOGIN, AUTH_LOGIN_EXITO, AUTH_LOGOUT, AUTH_LOGIN_ERROR } from "../types";


const initialState = {
  token: localStorage.getItem('token') || null,
  authenticated: false,
  message: null,
  loading: false,
};


export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        loading: action.payload
      }
    case AUTH_LOGIN_EXITO:
      localStorage.setItem("token", action.payload.access_token);
      return {
        ...state,
        token: action.payload.access_token,
        authenticated: true,
        loading: false,
      }

    case AUTH_LOGIN_ERROR: 
      return {
        ...state,
        message: action.payload,
        loading: false,
      }
    
    case AUTH_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        authenticated: false,
        loading: false,
      }

    default:
      return state;
  }
}