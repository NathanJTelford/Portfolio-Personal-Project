import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Burger = ({ flipBurger, menuOut, children }) => {
    const showHideClassName = menuOut ? 'menu display-block' : 'menu display-none';


    return (
        <div className={showHideClassName}>
            <section className='nav-main'>
                {children}
                <div className='links' onClick={()=>flipBurger()}>
                    <ul>

                    <div>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                            <li>Home</li>
                            </Link>
                        </div>
                        <div className='login-link'>
                            <Link to='/login' style={{ textDecoration: 'none' }}>
                                <li>Login</li>
                            </Link>

                        </div>
                        <div className='register-link'>
                            <Link to='/register' style={{ textDecoration: 'none' }}>
                                <li>Register</li>
                            </Link>
                        </div>
                        <div>
                            <Link to='/stats' style={{ textDecoration: 'none' }}>
                            <li>Stats</li>
                            </Link>
                        </div>
                        <div className='logout-link'>
                            <Link to='/' style={{ textDecoration: 'none' }} onClick={()=>{Axios.get('/auth/logout').then(()=>{})}}>
                                <li>Logout</li>
                            </Link>
                        </div>
                    

                    </ul>
                </div>
            </section>
        </div>
    )
}
export default Burger;