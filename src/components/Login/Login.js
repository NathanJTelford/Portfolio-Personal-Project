import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from './../../../src/LogoMakr_1vONm5.png';
import { connect } from 'react-redux';
import { getUserData } from './../../ducks/user'
import Modal from './Modal';


class login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            show: false
        }

    }

    showModal = () => {
        this.setState({ show: true })
    }

    hidModal = () => {
        this.setState({ show: false })
    }



    async handleLogin() {
        const { email, password } = this.state;
        let res = await axios.post('/auth/login', { email: email, password: password })
        this.props.getUserData(res.data);
        if (res.data.loggedIn) {
            this.props.history.push('/')
        }
    }

     deleteAccount = async () => {
        await axios.delete(`/auth/delete/${this.state.email}/${this.state.password}`)
        alert('Account Deleted')
        this.props.history.push('/')
    }






    render() {
        return (
            <div className='main'>
                <nav className='nav'>
                    <Link to='/'>
                        <img src={Logo} alt='' />
                    </Link>
                </nav>
                <h1>Log In</h1>
                <br />
                <p>Email</p>
                <br />
                <input onChange={(e) => this.setState({ email: e.target.value })} name='email' id='email' />
                <br />
                <p>Password</p>
                <br />
                <input onChange={(e) => this.setState({ password: e.target.value })} id='password' name='password' type='password' />
                <br />
                <button onClick={() => this.handleLogin()} >Login</button>
                <br />
                <Modal show={this.state.show} handleClose={this.hidModal} deleteAccount={this.deleteAccount}>
                </Modal>
                <br />
                <p>delete account</p>
                <p>Email</p>
                <input onChange={(e) => this.setState({ email: e.target.value })} />
                <p>Password</p>
                <input onChange={(e) => this.setState({ password: e.target.value })} type='password' />
                <br/>
                <button onClick={() => this.showModal()}>Delete</button>

            </div>
        )
    }
}

const mapState = (reduxState) => reduxState;
export default connect(mapState, { getUserData })(login)