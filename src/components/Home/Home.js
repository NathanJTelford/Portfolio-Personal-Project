import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './../Nav/Nav';


export default  class Home extends Component {
    constructor() {
        super()
        this.state = {
            fieldCode: [],
            code: '',
        }
    }


    addSpectator(){
        this.setState({
            fieldCode: [...this.state.fieldCode, this.state.code],
            code:''

        })
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
                    <button onClick={()=>this.addSpectator()}>Watch Game</button>
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