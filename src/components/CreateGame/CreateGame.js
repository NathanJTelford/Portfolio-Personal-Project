import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class creatGame extends Component {
    constructor() {
        super()
        this.state = {
            gameName: '',
            teamName1: '',
            teamName2: '',
            scoreName: '',
            scoreValue: 0
        }
    }


    handleMakeGame() {
        const { gameName, teamName1, teamName2 } = this.state;
        axios.post('/makeGame', { gameName: gameName, teamName1: teamName1, teamName2: teamName2 }).then(res=>{
            this.props.history.push('/watch')
        })
    }



    render() {
        return (
            <div>
                <nav id='home-nav'>
                    <Link to='/'>
                        <h2>SportsTrack</h2>
                    </Link>
                    <ul>
                        <Link to='/login'>
                            <li>Login</li>
                        </Link>
                        <Link to='/register'>
                            <li>Register</li>
                        </Link>
                    </ul>
                </nav>

                <div id='game-name'>
                    <h3>Game Name</h3>
                    <input onChange={(e) => this.setState({ gameName: e.target.value })} />
                </div>

                <div id='team-names'>
                <h3>Team 1</h3>
                <input onChange={(e)=>this.setState({teamName1:e.target.value})} />
                <h3>Team 2</h3>
                <input onChange={(e)=>this.setState({teamName2:e.target.value})} />

                </div>

                <div id='score-types'>

                </div>


                    <button onClick={()=>this.handleMakeGame()}>Track Game</button>

            </div>
        )
    }
}