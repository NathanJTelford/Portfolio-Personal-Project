import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { gameName, teamName1, teamName2, pointValues, numOfPeriods } from '../../ducks/user';



class creategame extends Component {



    render() {
        return (
            <div>
                <nav></nav>
                <br />


                <h1>Let's Get Started!</h1>
                <p> first you need to define what kind of game you'll be playing. eg. Soccor, or Rugby </p>
                <label for='sportType'>Name:</label>

                <br />

                <input onChange={(e) => this.props.gameName(e.target.value)} name='sportType' id='sportType' />

                <br />

                <p>Next you need to define the names of the opposing teams. eg. The Eagles</p>
                <label for='teamName'>Team Name</label>

                <br />

                <input onChange={(e) => this.props.teamName1(e.target.value )} name='teamName' id='teamName' />
                <input onChange={(e) => this.props.teamName2(e.target.value )} name='teamName' id='teamName' />

                <br />

                <p>Now define the names of the types of scoring you need to track. eg Touchdown, Field Goal, Safety.
                    After each name make sure to define how many points the team will receive for the score. </p>

                <label for='scoreType'>Score Type Name:</label>

                <input onChange={(e) => this.props.pointValues( e.target.value )} name='scoreType' id='scoreType' placeholder='Touchdown' />

                <label for='pointValue'>Number Of Points Awarded:</label>

                <input onChange={(e) => this.props.pointValues(  e.target.value)} name='pointValue' id='pointValue' placeholder='6' />

                <br/>

                <button>ADD SCORING METHOD</button>

                <br />

                <p>Last thing to do is tell us how many periods or halfs there will be.</p>


                <br />
                <label for='periods'>Number Of Periods:</label>

                <select id='periods' name='periods'>
                <option value='' >Select</option>
                <options >1</options>
                <options >2</options>
                <options >3</options>
                <options >4</options>
                <options >5</options>
                <options >6</options>
                <options >7</options>
                <options >8</options>
                <options >9</options>
                <options >10</options>
                <options >11</options>
                <options >12</options>
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

export default connect(mapState, { gameName, teamName1, teamName2, pointValues, numOfPeriods })(creategame)



{/* <input onChange={(e) => this.props.numOfPeriods(e.target.value)} name='periods' id='periods' /> */}
