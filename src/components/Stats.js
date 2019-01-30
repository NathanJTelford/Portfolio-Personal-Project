import React, { Component } from 'react';
// import Axios from 'axios';

export default class Stats extends Component {
    constructor() {
        super()
        this.state = {
            stats:[]
        }
    }

//   async  componentDidMount(){
//      let res = await  Axios.get('/getStats').then(()=>{
//          console.log(res)
//             this.setState({stats: res.data})
//         })
//     }

    render() {
        const statsDisplay = this.state.stats.map((el,i)=> {
            return(

                <>
                <p key={i}> {el}</p>
                </>
            )
                
            
        })
        return (
            <div>
                {statsDisplay}
            </div>
        )
    }
}