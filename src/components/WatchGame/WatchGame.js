import React, { Component } from 'react';
import axios from 'axios';
import { teamOneScore, teamTwoScore } from './../../ducks/user';
import { connect } from 'react-redux';
import Nav from './../Nav/Nav';



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

      handlePointOneT1 = async () => {
        let newScore = this.state.teamOneScore;
        newScore = newScore + 1
        await this.setState({ teamOneScore: newScore })
        this.props.teamOneScore(this.state.teamOneScore)
    }

      handlePointTwoT1 = async () => {
        let newScore = this.state.teamOneScore;
        newScore = newScore + 2
        await this.setState({ teamOneScore: newScore })
        this.props.teamOneScore(this.state.teamOneScore)

    }

      handlePointThreeT1 = async () => {
        let newScore = this.state.teamOneScore;
        newScore = newScore + 3
        await this.setState({ teamOneScore: newScore })
        this.props.teamOneScore(this.state.teamOneScore)

    }

      handlePointOneT2 = async () => {
        let newScore = this.state.teamTwoScore;
        newScore = newScore + 1
        await this.setState({ teamTwoScore: newScore })
        this.props.teamTwoScore(this.state.teamTwoScore)

    }

      handlePointTwoT2 = async () => {
        let newScore = this.state.teamTwoScore;
        newScore = newScore + 2
        await this.setState({ teamTwoScore: newScore })
        this.props.teamTwoScore(this.state.teamTwoScore)

    }

      handlePointThreeT2 = async () => {
        let newScore = this.state.teamTwoScore;
        newScore = newScore + 3
        await this.setState({ teamTwoScore: newScore })
        this.props.teamTwoScore(this.state.teamTwoScore)

    }





    render() {
        const { name, teamName1, teamName2, teamOneScore, teamTwoScore, username, pic, code } = this.state;
        return (
            <div className='main'>
              <Nav/>
                <div id='coach_info'>
                    <div id='pic'>
                        <img src={pic} alt='' />
                    </div>
                    <div id='code'>
                        <h2 id='username'>{username}</h2>
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

                    </div>
                    <div id='teamOneScore'>
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
export default connect(mapState, { teamOneScore, teamTwoScore })(watchGame)