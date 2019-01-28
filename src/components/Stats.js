import React, { Component } from 'react';
import Axios from 'axios';

export default class Stats extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount(){
        Axios.get('/getStats').then(()=>{
            
        })
    }

    render() {
        return (
            <div>
                Stats Here
            </div>
        )
    }
}