import React, { Component } from 'react';
import Logo from './../../../src/LogoMakr_1vONm5.png';
import Burger from './burgerModal'
import { Link } from 'react-router-dom';
import  burgerImg  from './../../../src/Hamburger_icon.svg.png';

export default class Nav extends Component {
    constructor() {
        super()
        this.state = {
            burger: false,
        }
    }


    showMenu = () => {
        this.setState({ burger: true })
    }

    hidMenu = () => {
        this.setState({ burger: false })
    }

    render() {
        return (
                <nav id='home-nav'>
                    <div>
                       <Link to='/'>
                            <img className='logo' src={Logo} alt='' />
                       </Link>
                    </div>
                    <div className='burger-house'>
                    <img src={ burgerImg } alt='' id='burger-menu' onClick={()=>this.showMenu()} />
                    <Burger flipBurger={this.hidMenu} menuOut={this.state.burger}>
                    </Burger>
                    </div>
                    
                </nav>
        )
    }
}

