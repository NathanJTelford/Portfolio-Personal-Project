import React, { Component } from 'react';
import './../src/reset.css'
import './App.scss';
import './components/WatchGame/WatchGame.scss';
import './components/CreateGame/CreateGame.scss';
import './components/Home/Home.scss';
import './components/Login/Login.scss';
import './components/Register/Register.scss';
import './components/ClientWatch/ClientWatch.scss';
import ClientWatch from './components/ClientWatch/ClientWatch';
import WatchGame from './components/WatchGame/WatchGame';
import CreateGame from './components/CreateGame/CreateGame';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Stats from './components/Stats'
import { Switch, Route, HashRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className='super-background'>

        <div className='background'>
          <div className="App">

            <HashRouter>
              <Switch>
                <Route exact path='/' component={Home} ></Route>
                <Route path='/watch' component={WatchGame} ></Route>
                <Route path='/create' component={CreateGame} ></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login} ></Route>
                <Route path='/clientWatch' component={ClientWatch}></Route>
                <Route path='/stats' component={Stats}></Route>
              </Switch>
            </HashRouter>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
