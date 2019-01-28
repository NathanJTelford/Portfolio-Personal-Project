import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from  './../../../src/LogoMakr_1vONm5.png';
import Nav from './../Nav/Nav';

export default class register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            pic: ''
        }
    }



    handleUsername(val) {
        this.setState({ username: val })
    }

    handleEmail(val) {
        this.setState({ email: val })
    }

    handlePasswordCreate(val) {
        this.setState({ password: val })
    }

    handlePic(val) {
        this.setState({ pic: val })
    }

    async handleRegister() {
        const { username, email, password, pic } = this.state;
        let res = await axios.post('/auth/register', { username: username, email: email, password: password, pic: pic })
        if (res.data.registered) {
            this.props.history.push('/')
        }

    }


    render() {
        return (
            <div className='register'>
                <Nav/>
                <br />
                <div>
                    <p>Username</p>
                    <br />
                    <input onChange={(e) => this.handleUsername(e.target.value)} type='text' name='username' id='username' />
                </div>
                <br />
                <div>
                    <p>Email</p>
                    <br />
                    <input onChange={(e) => this.handleEmail(e.target.value)} type='text' name='email' id='email' />
                </div>
                <br />
                <div>
                   <p>Password</p>
                    <br />
                    <input onChange={(e) => this.handlePasswordCreate(e.target.value)} type='text' name='password' id='password' type='password' />
                </div>
                <br />
                <div>
                    <p>Profile Picture</p>
                    <br />
                    <input onChange={(e) => this.handlePic(e.target.value)} type='text' name='profile picture' id='profile picture' />
                </div>
                <br />
                <button onClick={() => this.handleRegister()}>Register</button>

            </div>
        )
    }
}