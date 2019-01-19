import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getGameData } from './../../ducks/user';
import { connect } from 'react-redux';



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
            this.props.getGameData(res.data)
            console.log(this.props)

        } catch (e) {
            console.log('Game not found', e)
        }

    }

    componentWillUnmount(){
        axios.post(`/scorekeeper/${this.state.teamOneScore}/${this.state.teamTwoScore}`).then(res=>{
            const { teamOneScore, teamTwoScore } = res.session.score;
            this.setState({teamOneScore:teamOneScore, teamTwoScore:teamTwoScore})
        })
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
export default connect(mapState, { getGameData })(watchGame)