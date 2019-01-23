import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../../src/LogoMakr_1vONm5.png';
import Axios from 'axios';
import io from 'socket.io-client';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            fieldCode: '',
            message: '',
            messages:[]
        }
        this.socket = io.connect(':4040');
        this.socket.on('generate general response', data => this.handleResponse(data))
    }

    handleTest( message) {
        this.socket.emit(`blast message to general`, { message })
    }

    handleResponse(data) {
        console.log(data)
        this.setState({messages: [...this.state.messages, data.message ]})
    }


    // watchGame(){
    //     let code = this.props;
    //     if(code === this.state.fieldCode){
    //         this.socket.emit('join room', { room: this.state.fieldCode })
    //     }else { alert('Wrong code, please try again')}
    // }



    handleCode(val) {
        this.setState({
            fieldCode: val
        })
    }


    render() {
        const messages = this.state.messages.map(message => {
            return <p>{message}</p>;
          });
        return (
            <div className='main'>
                <nav id='home-nav'>
                    <div className='logo'>

                        <Link to='/'>
                            <img src={Logo} alt='' />
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
                <div id='welcome'>
                    <h1>Welcome!</h1>
                    <button onClick={() => this.handleTest(this.state.message)}>Test Socket</button>
                    {messages}
                    <input onChange={(e) => this.setState({ message: e.target.value })} />
                    <br />
                    <p> Let's get started. to start watching the score enter your 4 character field code here.</p>
                    <br />
                    <input type='text' placeholder='Field Code' onChange={(e) => { this.handleCode(e.target.value) }} />
                    <br />
                    <button onClick={() => this.props.history.push('/clientWatch')}>Watch Game</button>
                </div>
                <div id='make_game'>
                    <p>Login or register to save your customized games!</p>
                    <br />
                    <p>Or create a quick game here</p>
                    <br />
                    <Link to='/create'>
                        <button>Make Game</button>
                    </Link>
                </div>

            </div>
        );
    }
}

export default Home;