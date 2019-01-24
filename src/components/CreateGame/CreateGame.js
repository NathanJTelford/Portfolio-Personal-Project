import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from './../../../src/LogoMakr_1vONm5.png';
// import io from 'socket.io-client';
import { connect } from 'react-redux';
import { getFieldCode } from './../../ducks/user'


class creatGame extends Component {
    constructor() {
        super()
        this.state = {
            gameName: '',
            teamName1: '',
            teamName2: '',
            scoreName: '',
            scoreValue: 0,
            fieldCode: ''
        }
    }

    async componentDidMount() {
        let char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
        let strLength = 4;
        let randomCode = '';
        for (let i = 0; i < strLength; i++) {
            let rnum = Math.floor(Math.random() * char.length);
        randomCode += char.substring(rnum, rnum + 1);
        this.setState({fieldCode: randomCode})
        const { fieldCode } = this.state;
        await axios.post('/storeCode',{fieldCode: fieldCode} )
        }
        
        this.props.getFieldCode(randomCode)
    }


    handleMakeGame() {
        const { gameName, teamName1, teamName2 } = this.state;
        axios.post('/makeGame', { gameName: gameName, teamName1: teamName1, teamName2: teamName2 }).then(res => {
            this.props.history.push('/watch')
        })
    }




    render() {
        return (
            <div>
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

                <div id='game-name'>
                    <h3>Game Name</h3>
                    <input onChange={(e) => this.setState({ gameName: e.target.value })} />
                </div>

                <div id='team-names'>
                    <h3>Team 1</h3>
                    <input onChange={(e) => this.setState({ teamName1: e.target.value })} />
                    <h3>Team 2</h3>
                    <input onChange={(e) => this.setState({ teamName2: e.target.value })} />

                </div>

                <div id='score-types'>

                </div>


                <button onClick={() => this.handleMakeGame()}>Track Game</button>

            </div>
        )
    }
}

const mapState = (reduxState) => reduxState;
export default connect(mapState, { getFieldCode })(creatGame)