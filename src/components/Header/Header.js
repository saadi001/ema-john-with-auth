import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const userLogout = () =>{
        logOut()
        .then(() => {
            navigate('/login');
        })
        .catch(error => console.error(error));
    }

    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ? <button className='logoutBtn' onClick={userLogout}>Log out</button>
                    : <>
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link></>
                }
                <span className='userName'><small>{user?.email}</small></span>
            </div>
        </nav>
    );
};

export default Header;