import React, { Component } from 'react';
import axios from 'axios';


export default class EditModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            pic: '',
            newPass: '',
            id: 0,
            editEmail: 'none',
            editUsername: 'none',
            editPic: 'none'

        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.showEdit !== this.props.showEdit) {
            this.showEdit()
        }
    }
    componentDidMount() {
        this.showEdit()
    }

    showEdit = async () => {
        console.log(this.state)
        let res = await axios.get('/getUser');
        this.setState({ email: res.data.email, username: res.data.username, pic: res.data.pic, id: res.data.id })
    }

    editEmail = () => {
        this.setState({ editEmail: 'block' })
    }

    editUsername = () => {
        this.setState({ editUsername: 'block' })
    }

    editPic = () => {
        this.setState({ editPic: 'block' })
    }


    render() {
        const { username, email, pic, } = this.state;
        const { closeEdit, children, editAccount, showEdit } = this.props;
        const showHideClassName = showEdit ? 'editModal edit-display-block' : 'editModal edit-display-none';
        return (
            (
                <div className={'editModal edit-display-block'}>
                    <section className='edit-modal-main'>
                        {children}
                        <div className='flex'>
                            <h2>{email}<button onClick={this.editEmail}>Edit Email</button></h2>
                            <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} style={{ display: this.state.editEmail }} />
                            <h2>{username}<button onClick={this.editUsername}>Edit Username</button></h2>
                            <input onChange={(e) => this.setState({ username: e.target.value })} value={this.state.username} style={{ display: this.state.editUsername }} />
                            <button onClick={this.editPic}>Edit Profile Picture</button>
                            <input onChange={(e) => this.setState({ pic: e.target.value })} value={this.state.pic} style={{ display: this.state.editPic }} />
                            <img src={pic} alt='' />
                            <h2>Edit Password</h2>
                            <input onChange={(e) => this.setState({ newPass: e.target.value })} />

                            <div className='edit-modal-button'>
                                <button onClick={() => editAccount(this.state.email, this.state.username, this.state.Pic, this.state.newPass, this.state.id)}>Send</button>
                                <button onClick={closeEdit}>Cancel</button>
                            </div>
                        </div>
                    </section>
                </div>
            )
        )
    }
}

