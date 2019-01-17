import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGameName, updateTeamName1, updateTeamName2, updateConcatPoints, updateNumOfPeriods, updateScoreValue, updateScoreType } from '../../ducks/user';
// import store from '../../store';




class watchgame extends Component {





    render() {
        const { gameName, teamName1, teamName2, concatPoints, numOfPeriods } = this.props;
        console.log(this.props)
        return (
            <div className='team-stats'>
                <nav>Nav</nav>
                <br />

                <div id='gameData'> {gameName} {numOfPeriods} </div>
                <div id='team1'>
                    {teamName1}
                    <div id='add-team1-scores'>

                    </div>
                    <div id='team1-score'>
                        <p>{concatPoints}</p>
                        <h1 className='scores'>Score:</h1>
                        <button>Add {concatPoints}</button>
                    </div>


                </div>
                <div id='team2'>
                    {teamName2}
                    <div id='add-team2-scores'>


                    </div>
                    <div id='team2-score'>
                        <p>{concatPoints}</p>
                        <h1 className='scores'>Score:</h1>
                        <button>Add {concatPoints}</button>
                    </div>

                </div>

            </div>
        )
    }
}

const mapState = (reduxState) => reduxState;

export default connect(mapState, { updateGameName, updateTeamName1, updateTeamName2, updateConcatPoints, updateNumOfPeriods, updateScoreValue, updateScoreType })(watchgame)