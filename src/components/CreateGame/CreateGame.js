import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateGameName, updateTeamName1, updateTeamName2, updateConcatPoints, updateNumOfPeriods } from '../../ducks/user';



class creategame extends Component {
    constructor() {
        super()
        this.state = {
            scoreType: '',
            scoreValue: 0
        }
    }



    render() {
        return (
            <div>
                <nav>Nav</nav>
                <br />


                <h1>Let's Get Started!</h1>
                <p> first you need to define what kind of game you'll be playing. eg. Soccor, or Rugby </p>
                <label for='sportType'>Name:</label>

                <br />

                <input onChange={(e) => this.props.updateGameName(e.target.value)} value={this.props.gameName} name='sportType' id='sportType' />

                <br />

                <p>Next you need to define the names of the opposing teams. eg. The Eagles</p>
                <label for='teamName1'>Team 1.</label>

                <br />

                <input onChange={(e) => this.props.updateTeamName1(e.target.value)} value={this.props.teamName1} name='teamName1' id='teamName1' />
                <br />
                <label for='teamName2'>Team 2.</label>
                <br />
                <input onChange={(e) => this.props.updateTeamName2(e.target.value)} value={this.props.teamName2} name='teamName2' id='teamName2' />

                <br />

                <p>Now define the names of the types of scoring you need to track. eg Touchdown, Field Goal, Safety.
                    After each name make sure to define how many points the team will receive for the score. </p>

                <label for='scoreType'>Score Type Name:</label>

                <input onChange={(e) => this.setState({ scoreType: e.target.value })} name='scoreType' id='scoreType' placeholder='Touchdown' />

                <label for='pointValue'>Number Of Points Awarded:</label>

                <input onChange={(e) => this.setState({ scoreValue: e.target.value })} name='pointValue' id='pointValue' placeholder='6' />

                <br />

                <button onClick={() => this.props.updateConcatPoints(this.state.scoreType, this.state.scoreValue)} value={this.props.concatPoints}>ADD SCORING METHOD</button>

                <br />

                <p>Last thing to do is tell us how many periods there will be.</p>


                <br />
                <label for='periods'>Number Of Periods:</label>

                <select id='periods' name='periods'>
                    <option value='' >Select</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >1</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >2</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >3</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >4</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >5</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >6</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >7</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >8</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >9</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >10</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >11</option>
                    <option onChange={(e) => this.props.numOfPeriods(e.target.value)} >12</option>
                </select>

                <br />

                <h4 id='conditionalRenderText'>Great! now remember to register if you want to save your work for later use</h4>

                <br />

                <p>Click Track Game to create, and start keeping score. </p>

                <Link to='/watch'>
                    <button>Track Game</button>
                </Link>

            </div>

        )
    }
}

const mapState = (reduxState) => reduxState;

export default connect(mapState, { updateGameName, updateTeamName1, updateTeamName2, updateConcatPoints, updateNumOfPeriods })(creategame)
