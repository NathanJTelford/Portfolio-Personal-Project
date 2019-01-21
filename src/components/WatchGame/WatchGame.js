import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getGameData, getScoreData } from './../../ducks/user';
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
            teamName2: ''

        }
    }

    async componentDidMount() {
        try {
            const res = await axios.get('/getGame')
            this.props.getGameData(res.data);
            const { teamOneScore, teamTwoScore } = this.session.score
            this.setState({ teamOneScore: teamOneScore, teamTwoScore: teamTwoScore })
            console.log(this.props)

        } catch (e) {
            console.log('Game not found', e)
        }

    }


    componentWillUnmount() {
        axios.post(`/scorekeeper/${this.state.teamOneScore}/${this.state.teamTwoScore}`)
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
        const { name, teamName1, teamName2 } = this.props.game;
        return (
            <div>
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
                <h1>{name}</h1>

                <div className='team-one'>
                    <div>{teamName1}</div>
                    <button onClick={() => this.handlePointOneT1()} >1 Point</button>
                    <button onClick={() => this.handlePointTwoT1()} >2 Points</button>
                    <button onClick={() => this.handlePointThreeT1()} >3 Points</button>
                    <div id='teamOneScore'>
                        {this.state.teamOneScore}
                    </div>
                </div>
                <br />
                <div className='team-two'>
                    <div>{teamName2}</div>
                    <button onClick={() => this.handlePointOneT2()} >1 Point</button>
                    <button onClick={() => this.handlePointTwoT2()} >2 Points</button>
                    <button onClick={() => this.handlePointThreeT2()} >3 Points</button>
                    <div id='teamTwoScore'>
                        {this.state.teamTwoScore}
                    </div>
                </div>

            </div>
        )
    }
}

const mapState = (reduxState) => reduxState;
export default connect(mapState, { getGameData, getScoreData })(watchGame)