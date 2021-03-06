import React, { Component } from 'react';
import axios from 'axios';
import Nav from './../Nav/Nav';


export default  class creatGame extends Component {
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
    }


    handleMakeGame() {
        const { gameName, teamName1, teamName2 } = this.state;
        axios.post('/makeGame', { gameName: gameName, teamName1: teamName1, teamName2: teamName2 }).then(res => {
            this.props.history.push('/watch')
        })
    }



    render() {
        return (
            <div className='main'>
                    <Nav/>
                    <br/>

                <div id='game-name'>
                    <h3>Game Name</h3>
                    <br/>
                    <input onChange={(e) => this.setState({ gameName: e.target.value })} />
                </div>
                <br/>

                <div className='team-names'>
                    <h3>Team 1</h3>
                    <input onChange={(e) => this.setState({ teamName1: e.target.value })} />
                    <br/>
                    <h3>Team 2</h3>
                    <input onChange={(e) => this.setState({ teamName2: e.target.value })} />

                </div>

                <div id='score-types'>

                </div>
                <br/>


                <button onClick={() => this.handleMakeGame()}>Track Game</button>

            </div>
        )
    }
}
