import Swal from "sweetalert2";
import { clienteAxiosAuth } from "../config/axios";
import { AUTH_LOGIN, AUTH_LOGIN_ERROR, AUTH_LOGIN_EXITO, AUTH_LOGOUT } from "../types";


export function loginAction(email, password) {
    return async (dispatch) => {
        dispatch( authLogin() );

        try {
          const respuesta = await clienteAxiosAuth.post('', {email, password});
            dispatch( authLoginExito(respuesta.data) );
        } catch (error) {
            console.log(error);
            dispatch( authLoginError(false) );

          Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: 'Hubo un error, intenta de nuevo'
          })
        }
    }
}

const authLogin = () => ({
  type: AUTH_LOGIN,
  payload: true
});

const authLoginExito = (token) => ({
  type: AUTH_LOGIN_EXITO,
  payload: token
});

const authLoginError = estado => ({
  type: AUTH_LOGIN_ERROR,
  payload: estado
});

export function logoutAction() {
    return {
        type: AUTH_LOGOUT,
    }
}