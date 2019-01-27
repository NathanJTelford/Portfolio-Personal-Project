import React from 'react';
import { Link } from 'react-router-dom';

const Burger = ({ flipBurger, menuOut, children }) => {
    const showHideClassName = menuOut ? 'menu display-block' : 'menu display-none';


    return (
        <div className={showHideClassName}>
            <section className='nav-main'>
                {children}
                <div className='links'>
                    <ul>
                       
                            <Link to='/login'>
                                <li>Login</li>
                            </Link>
                       
                            <Link to='/register'>
                                <li>Register</li>
                            </Link>
                       
                            <Link to='/logout'>
                                <li>Logout</li>
                            </Link>



                    </ul>
                </div>
            </section>
        </div>
    )
}
export default Burger;