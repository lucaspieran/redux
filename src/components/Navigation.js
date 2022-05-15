import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Productos from './Productos';
import NuevoProducto from './NuevoProducto';
import EditarProducto from './EditarProducto';
import Header from './Header';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isAuthenticated = useSelector(state => state.auth.token);
  console.log(isAuthenticated);
  return (
    <>
      {isAuthenticated && <Header />}

      <div className="container mt-5">
        <Switch>
          <Route exact path="/login" component={Login} />

          {isAuthenticated ? (
            <>
              <Route exact path="/" component={Productos} />
              <Route exact path="/productos/nuevo" component={NuevoProducto} />
              <Route exact path="/productos/editar/:id" component={EditarProducto} />
            </>
          ) :
          (
              <Route exact path="/">
                { !isAuthenticated && <Redirect to="/login" /> }
              </Route>
          )
          }
          {/* <Redirect from="/" to="" /> */}
        </Switch>
      </div>
    </>
  )
}

export default Navigation