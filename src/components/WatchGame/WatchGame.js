import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getGameData, getScoreData, getFieldCode, getUserData } from './../../ducks/user';
import { connect } from 'react-redux';
import Logo from  './../../../src/LogoMakr_1vONm5.png';



class watchGame extends Component {
    constructor() {
        super()
        this.state = {
            teamOneScore: 0,
            teamTwoScore: 0,
            gameName: '',
            teamName1: '',
            teamName2: '',
            Score:'',
            username:'',
            pic:'',
            code:''


        }
    }

    async componentDidMount() {
        try {
            const res = await axios.all([axios.get('/getGame'), axios.get('/getUser'), axios.get('/getScore'), axios.get('/getCode')])
            // this.props.getGameData(res.data);
            // this.props.getUserData(res.data);
            // this.props.getFieldCode(res.data);
            // const { teamOneScore, teamTwoScore } = this.session.score;
            // const { name, teamName1, teamName2 } = this.session.game;
            const code = res[3].code.data
            this.setState({code:code})
            // const { username, pic } = this.session.user;

            // this.setState({ teamOneScore: teamOneScore, teamTwoScore: teamTwoScore, gameName: name, teamName1: teamName1, teamName2: teamName2, code:code, username: username, pic:pic })
            console.log(this.props)

        } catch (e) {
            console.log('Game not found', e)
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
        console.log(this.state.code)
        const { name, teamName1, teamName2, teamOneScore, teamTwoScore,  username, pic, code } = this.state;
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
                <div id='coach_info'>
                <h2>{username}</h2>
                <img src={pic}  alt=''/>
                <p>FieldCode: {code}</p>
                </div>
                <h1>{name}</h1>

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