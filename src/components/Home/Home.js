import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <Link to='/'>
                    <h2>SportsTrack</h2>
                </Link>
                <nav id='home-nav'>
                    <ul>
                        <Link to='/login'>
                            <li>Login</li>
                        </Link>
                        <Link to='/register'>
                            <li>Register</li>
                        </Link>
                    </ul>
                </nav>
                <div>
                    <h1>Welcome!</h1>
                    <p> Let's get started. to start watching the score enter your 4 character field code here.</p>
                    <input type='text' placeholder='Field Code' onChange={(e) => { this.handleCode(e.target.value) }} />
                    <br />
                    <Link to='/watch'>
                        <button>Watch Game</button>
                    </Link>
                </div>
                <div>
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