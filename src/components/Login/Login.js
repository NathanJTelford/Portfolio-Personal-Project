import React, {Component} from 'react';
import axios from 'axios';



export default class login extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
       
    }



    async handleLogin(){
        const {email,password} = this.state;
       let res = await axios.post('/auth/login',{email:email, password:password})
        if(res.data.loggedIn){
            this.props.history.push('/')
        }
    }




    render(){
        return(
            <div>
                <h1>Log In</h1>
                <br/>
                <label for='email'>Email</label>
                <br/>
                <input onChange={(e)=>this.setState({email:e.target.value})} name='email' id='email' />
                <br/>
                <label id='password'>Password</label>
                <br/>
                <input onChange={(e)=>this.setState({password:e.target.value})} id='password' name='password' type='password' />
                <br/>
                <button onClick={()=>this.handleLogin()} >Login</button>
            </div>
        )
    }
}