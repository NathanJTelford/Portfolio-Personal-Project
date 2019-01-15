import React, { Component } from 'react';




export default class watchgame extends Component{
    constructor(props){
        super(props)
        this.state={
            score:[]
        }
    }





    render(){
        return(
            <div className='team-stats'>
                <div id='team1'>
                    <div id='add-team1-scores'>
                    
                    
                    </div>
                    <div id='team1-score'>
                        <h1>Score:</h1>
                    </div>


                </div>
                <br/>
                <div id='team2'>
                    <div id='add-team2-scores'>
                    
                    
                    </div>
                    <div id='team2-score'>
                        <h1>Score:</h1>
                    </div>

                </div>

            </div>
        )
    }
}