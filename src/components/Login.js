import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';
import { loginAction } from '../actions/authActions';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const alerta = useSelector(state => state.alerta.alerta);
  const isAuthenticated = useSelector(state => state.auth.token);
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (email.trim() === '' || password.trim() === '') {
      const alerta = {
        msg: 'Ambos campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3'
      }
      dispatch(mostrarAlerta(alerta));

      return;
    }

    if (!emailRegex.test(email)) {
      const alerta = {
        msg: 'El email es inválido',
        classes: 'alert alert-danger text-center text-uppercase p3 w-100'
      }
      dispatch(mostrarAlerta(alerta))
        

      return;
    }

    dispatch(ocultarAlertaAction());

    dispatch(loginAction({ email, password }))

    history.push('/');
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column vh-100 w-100">
        <h1>Login</h1>

        {alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null}

        <form onSubmit={handleSubmit} className="w-50">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              name="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary font-weight-bold text-uppercase d-block mt-3"
          >Login</button>
        </form>
      </div>
    </>
  )
}

export default Login