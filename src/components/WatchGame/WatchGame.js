import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gameName, teamName1, teamName2, pointValues, numOfPeriods } from '../../ducks/user';
// import store from '../../store';




class watchgame extends Component {

    // componentDidMount(){
    //     const track = store({})
    //     return track
    // }





    render() {
        const { gameName } = this.props.gameName;
        const { periods } = this.props.numOfPeriods;
        const {  teamName1 } = this.props.teamName1;
        const {teamName2} =this.props.teamName2;
        const {  scoreName, pointValue } = this.props.pointValues;
        console.log(this.props)
        return (
            <div className='team-stats'>
                <nav>Nav</nav>
                <br />
                <div id='gameData'> {gameName} {periods} </div>
                <div id='team1'>
                    {teamName1}
                    <div id='add-team1-scores'>

                    </div>
                    <div id='team1-score'>
                        <h1>Score:</h1>
                        <p>{pointValue}</p>
                        <button>Add {scoreName}</button>
                    </div>


                </div>
                <br />
                <div id='team2'>
                    {teamName2}
                    <div id='add-team2-scores'>


                    </div>
                    <div id='team2-score'>
                        <h1>Score:</h1>
                        <p>{pointValue}</p>
                        <button>Add {scoreName}</button>
                    </div>

                </div>

            </div>
        )
    }
}

const mapState = (reduxState) => reduxState;

export default connect(mapState, { gameName, teamName1, teamName2, pointValues, numOfPeriods })(watchgame)