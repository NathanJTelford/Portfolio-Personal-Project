import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../../src/LogoMakr_1vONm5.png';
import axios from 'axios';
// import clientWatch from './../ClientWatch/ClientWatch';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            fieldCode: [],
            code: '',
        }
    }

    sendCode = async () => {
        let response = await axios.get('/getCode');
        if(this.state.code !== response){
            alert('Wrong Code, Please Try Again')
        }
        else{
            this.props.push('/clientWatch')
        }

    }

    logout(){
        axios.get('/auth/logout')
    }



    handleCode(val) {
        this.setState({
            code: val
        })

    }


    render() {
        return (
            <div className='main'>
                <nav id='home-nav'>
                    <div className='logo'>

                        <Link to='/'>
                            <img src={Logo} alt='' />
                        </Link>

                    </div>
                    <ul>
                        <button onClick={()=>this.logout()}>logout</button>
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
                    <br />
                    <p> Let's get started. to start watching the score enter your 4 character field code here.</p>
                    <br />
                    <input type='text' placeholder='Field Code' onChange={(e) => { this.handleCode(e.target.value) }} />
                    <br />
                    <button onClick={() => this.sendCode(this.state.code)}>Watch Game</button>
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