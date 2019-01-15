import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class creategame extends Component {
    constructor() {
        super()
        this.state = {
            sportName: '',
            teamName: '',
            scoreName: '',
            pointValue: 0,
            periods: 0
        }
    }



    trackGame() {
        const { sportName, teamName, scoreName, pointValue, periods } =this.state;
        axios.post('/make/makeGame', { sportName:sportName, teamName:teamName, scoreName:scoreName, pointValue:pointValue, periods:periods })
    }


    render() {
        return (
            <div>
                <nav></nav>
                <br />
                <h1>Let's Get Started!</h1>
                <p> first you need to define what kind of game you'll be playing. eg. Soccor, or Rugby </p>
                <label for='sportType'>Name:</label>
                <br />
                <input onChange={(e) => this.setState({ sportName: e.target.value })} name='sportType' id='sportType' />
                <br />
                <p>Next you need to define the names of the opposing teams. eg. The Eagles</p>
                <label for='teamName'>Team Name</label>
                <br />
                <input onChange={(e) => this.setState({ teamName: e.target.value })} name='teamName' id='teamName' />
                <br />
                <p>Now define the names of the types of scoring you need to track. eg Touchdown, Field Goal, Safety.
                    After each name make sure to define how many points the team will receive for the score. </p>
                <label for='scoreType'>Score Name:</label>
                <input onChange={(e) => this.setState({ scoreType: e.target.value })} name='scoreType' id='scoreType' placeholder='Touchdown' />
                <label for='pointValue'>Number Of Points Awarded:</label>
                <input onChange={(e) => this.setState({ pointValue: e.target.value })} name='pointValue' id='pointValue' placeholder='6' />
                <br />
                <p>Last thing to do is tell us how many periods or halfs there will be.</p>
                <label for='periods'>Number Of Periods:</label>
                <br />
                <input onChange={(e) => this.setState({ periods: e.target.value })} name='periods' id='periods' />
                <br />
                <h4>Great! now remember to register if you want to save your work for later use</h4>

                <br />
                <p>Click Track Game to create, and start keeping score. </p>
                <Link to='/watch'>
                    <button onClick={() => this.trackGame()} >Track Game</button>
                </Link>
            </div>

        )
    }
}