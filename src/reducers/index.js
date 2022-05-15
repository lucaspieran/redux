import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    productos: productosReducer,
    alerta: alertaReducer
});