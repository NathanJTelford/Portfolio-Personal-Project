import React, {Component} from 'react';
import axios from 'axios';
import { getGameData, getScoreData } from './../../ducks/user';
import { connect } from 'react-redux';
import socket from 'socket.io';
import chat from './chat';
import Logo from  './../../../src/LogoMakr_1vONm5.png';


export default class clientWatch extends Component{
    constructor(){
        super()
        this.state={

        }
    }



    render(){
        return(
            <div>
                                <nav id='home-nav'>
                <div className='logo'>

                <Link to='/'>
                <img src={Logo} alt=''/>
                </Link>

                </div>
                    <ul>
                    <div className='login'>
                        <Link to='/login'>
                            <li href='/login'>Login</li>
                        </Link>
                    </div>
                    <div className='register'>
                        <Link to='/register'>
                            <li>Register</li>
                        </Link>
                    </div>
                    </ul>
                </nav>

            </div>
        )
    }
}