import React, { Component } from 'react';
import { teamOneScore, teamTwoScore } from './../../ducks/user';
import { connect } from 'react-redux';
import Logo from './../../../src/LogoMakr_1vONm5.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import io from 'socket.io-client';


class clientWatch extends Component {
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

const mapState = (reduxState) => reduxState;
export default connect(mapState, { teamOneScore, teamTwoScore })(clientWatch)