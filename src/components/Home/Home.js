import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  Logo  from './../../../src/LogoMakr_1vONm5.png';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            fieldCode: ''
        }
    }



    handleCode(val) {
        this.setState({
            fieldCode: val
        })
    }


    render() {
        return (
            <div className='main'>
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
                <div id='welcome'>
                    <h1>Welcome!</h1>
                    <p> Let's get started. to start watching the score enter your 4 character field code here.</p>
                    <input type='text' placeholder='Field Code' onChange={(e) => { this.handleCode(e.target.value) }} />
                    <br />
                    <Link to='/watch'>
                        <button>Watch Game</button>
                    </Link>
                </div>
                <div id='make_game'>
                    <p>Login or register to save your customized games!</p>
                    <p>Or create a quick game here</p>
                    <Link to='/create'>
                        <button>Make Game</button>
                    </Link>
                </div>

            </div>
        );
    }
}

export default Home;