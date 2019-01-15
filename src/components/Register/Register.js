import React, { Component } from 'react';
import axios from 'axios';


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
        // console.log(val)
    }

    handleEmail(val) {
        this.setState({ email: val })
    }

    handlePassword(val) {
        this.setState({ password: val })
    }

    handlePic(val) {
        this.setState({ pic: val })
    }

    async handleRegister() {
        const { username, email, password, pic } = this.state;
        let res = await axios.post('/auth/register', { username: username, email: email, password: password, pic: pic }).then(res => {
            console.log(res.data)
        })
        
    }


    render() {
        return (
            <div className='register'>
                <nav>Nav</nav>
                <br />
                <div>
                    <label for='username'>username</label>
                    <br />
                    <input onChange={(e) => this.handleUsername(e.target.value)} type='text' name='username' id='username' />
                </div>
                <br />
                <div>
                    <label for='email'>Email</label>
                    <br />
                    <input onChange={(e) => this.handleEmail(e.target.value)} type='text' name='email' id='email' />
                </div>
                <br />
                <div>
                    <label for='password'>Password</label>
                    <br />
                    <input onChange={(e) => this.handlePassword(e.target.value)} type='text' name='password' id='password' type='password' />
                </div>
                <br />
                <div>
                    <label for='profile picture'>Profile Picture</label>
                    <br />
                    <input onChange={(e) => this.handlePic(e.target.value)} type='text' name='profile picture' id='profile picture' />
                </div>
                <br />
                <button onClick={() => this.handleRegister()}>Register</button>

            </div>
        )
    }
}