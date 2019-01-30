import React, { Component } from 'react';
import axios from 'axios';
import Nav from './../Nav/Nav';
import io from 'socket.io-client';


export default  class clientWatch extends Component {
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
        this.socket = io.connect(':4040');
        this.socket.on('generate general response', (data)=>{this.setState({teamOneScore:data.message, teamTwoScore: data.message2})})
    }

    async componentDidMount() {
        try {
            const { teamOneScore, teamTwoScore } = this.props;
            const res = await axios.all([axios.get('/getGame'), axios.get('/getUser'), axios.get('/getCode')])
            this.setState({ gameName: res[0].data.name })
            this.setState({ teamName1: res[0].data.teamName1 })
            this.setState({ teamName2: res[0].data.teamName2 })
            this.setState({ username: res[1].data.username })
            this.setState({ pic: res[1].data.pic })
            this.setState({ code: res[2].data.code })
            this.setState({teamOneScore:teamOneScore, teamTwoScore,teamTwoScore})
        }

        catch (e) {
        }

    }



    render() {
        console.log(this.state)
        const { name, teamName1, teamName2, username, pic, code, teamOneScore, teamTwoScore } = this.state;
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
                    <div id='teamOneScore'>
                        {teamOneScore}
                    </div>
                </div>
                <br />
                <div className='team-two'>
                    <div>{teamName2}</div>
                    <div id='teamTwoScore'>
                        {teamTwoScore}
                    </div>
                </div>

            </div>
        )
    }
}