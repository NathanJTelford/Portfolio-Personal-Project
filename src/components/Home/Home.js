import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import clientWatch from './../ClientWatch/ClientWatch';
import Nav from './../Nav/Nav';


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
            <Nav/>
                
                <div className='welcome'>
                    <h1>Welcome!</h1>
                    <br />
                    <p> Let's get started. to start watching the score enter your 4 character field code here.</p>
                    <br />
                    <input type='text' placeholder='Field Code' onChange={(e) => { this.handleCode(e.target.value) }} />
                    <br />
                    <Link to='/clientWatch'>
                    <button onClick={() => this.sendCode(this.state.code)}>Watch Game</button>
                    </Link>
                </div>
                <div className='make_game'>
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