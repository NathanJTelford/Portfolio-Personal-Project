import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from './../../../src/LogoMakr_1vONm5.png';
import { connect } from 'react-redux';
import { getUserData, getEmail, getPassword } from './../../ducks/user'
import Modal from './Modal';
import EditModal from './EditModal';


class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            show: false,
            showEdit: false
        }

    }

    showModal = () => {
        this.setState({ show: true })
    }

    hidModal = () => {
        this.setState({ show: false })
    }


    showEditModal = () => {
        this.setState({ showEdit: true })
    }

    hidEditModal = () => {
        this.setState({ showEdit: false })
    }



    async handleLogin() {
        let res = await axios.post('/auth/login', { email: this.state.email, password: this.state.password })
        if (res.data.loggedIn) {
            this.props.history.push('/')
        }
    }

    deleteAccount = async () => {
        await axios.delete(`/auth/delete/${this.state.email}/${this.state.password}`)
        alert('Account Deleted')
        this.props.history.push('/')
    }

    handleEdit = async (email, username, pic, pass, id) => {
        await axios.put(`/auth/edit/`, { email: email, username: username, pic: pic, pass: pass, id: id })
        await this.setState({ showEdit: false })
        alert("Account Updated")

    }





    render() {
        return (
            <div className='main'>
                <nav className='nav'>
                    <Link to='/'>
                        <img src={Logo} alt='' />
                    </Link>
                    <div id='edit'>
                        <button className='editButton' onClick={() => { this.showEditModal() }}>Edit Account</button>
                    </div>
                </nav>
                <h1 className='top'>Log In</h1>
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
                {
                    this.state.showEdit ?
                        <EditModal showEdit={this.state.showEdit} closeEdit={this.hidEditModal} email={this.state.email} password={this.state.password} editAccount={this.handleEdit}>
                        </EditModal>
                        : null
                }

                <br />
                <p>delete account</p>
                <p>Email</p>
                <input onChange={(e) => this.setState({ email: e.target.value })} />
                <p>Password</p>
                <input onChange={(e) => this.setState({ password: e.target.value })} type='password' />
                <br />
                <button onClick={() => this.showModal()}>Delete</button>

            </div>
        )
    }
}

const mapState = (reduxState) => reduxState;
export default connect(mapState, { getUserData, getEmail, getPassword })(login)