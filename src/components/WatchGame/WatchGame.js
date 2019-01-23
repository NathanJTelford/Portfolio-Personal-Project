import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getGameData, getScoreData, getFieldCode, getUserData } from './../../ducks/user';
import { connect } from 'react-redux';
import Logo from './../../../src/LogoMakr_1vONm5.png';



class watchGame extends Component {
    constructor() {
        super()
        this.state = {
            teamOneScore: 0,
            teamTwoScore: 0,
            gameName: '',
            teamName1: '',
            teamName2: '',
            username: '',
            pic: '',
            code: ''

        }
    }

    async componentDidMount() {
        try {
            const res = await axios.all([axios.get('/getGame'), axios.get('/getUser'), axios.get('/getCode')])
            this.setState({ gameName: res[0].data.name })
            this.setState({ teamName1: res[0].data.teamName1 })
            this.setState({ teamName2: res[0].data.teamName2 })
            this.setState({ username: res[1].data.username })
            this.setState({ pic: res[1].data.pic })
            this.setState({ code: res[2].data.code })
        }

        catch (e) {
        }

    }

    handlePointOneT1() {
        let newScore = this.state.teamOneScore;
        newScore = newScore + 1
        this.setState({ teamOneScore: newScore })
    }

    handlePointTwoT1() {
        let newScore = this.state.teamOneScore;
        newScore = newScore + 2
        this.setState({ teamOneScore: newScore })

    }

    handlePointThreeT1() {
        let newScore = this.state.teamOneScore;
        newScore = newScore + 3
        this.setState({ teamOneScore: newScore })

    }

    handlePointOneT2() {
        let newScore = this.state.teamTwoScore;
        newScore = newScore + 1
        this.setState({ teamTwoScore: newScore })

    }

    handlePointTwoT2() {
        let newScore = this.state.teamTwoScore;
        newScore = newScore + 2
        this.setState({ teamTwoScore: newScore })

    }

    handlePointThreeT2() {
        let newScore = this.state.teamTwoScore;
        newScore = newScore + 3
        this.setState({ teamTwoScore: newScore })

    }





    render() {
        const { name, teamName1, teamName2, teamOneScore, teamTwoScore, username, pic, code } = this.state;
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
                <div id='coach_info'>
                    <div id='pic'>
                        <img src={pic} alt='' />
                    </div>
                    <div id='code'>
                    <div id='username'>{username}</div>
                        <p>FieldCode: {code}</p>
                    </div>
                </div>
                <div id='gameName'>
                    <h1>{name}</h1>
                </div>

                <div className='team-one'>
                    <div>{teamName1}</div>
                    <div className='score_buttons'>
                        <button onClick={() => this.handlePointOneT1()} >1 Point</button>

                        <button onClick={() => this.handlePointTwoT1()} >2 Points</button>

                        <button onClick={() => this.handlePointThreeT1()} >3 Points</button>
                        <div id='teamOneScore'>
                        </div>
                        {teamOneScore}
                    </div>
                </div>
                <br />
                <div className='team-two'>
                    <div>{teamName2}</div>
                    <div className='score_buttons'>
                        <button onClick={() => this.handlePointOneT2()} >1 Point</button>

                        <button onClick={() => this.handlePointTwoT2()} >2 Points</button>

                        <button onClick={() => this.handlePointThreeT2()} >3 Points</button>
                    </div>
                    <div id='teamTwoScore'>
                        {teamTwoScore}
                    </div>
                </div>

            </div>
        )
    }
}

const mapState = (reduxState) => reduxState;
export default connect(mapState, { getGameData, getScoreData, getFieldCode, getUserData })(watchGame)