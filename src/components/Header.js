import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../actions/authActions';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch(logoutAction())

        history.push('/login');
    }
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-between">
            <div className="container">
                <h1> 
                    <Link to={'/'} className="text-light">
                        Lucas Store
                    </Link> 
                </h1>
            </div>

            <button  onClick={logout} className='btn me-4'>Logout</button>
        </nav>
     );
}
 
export default Header;