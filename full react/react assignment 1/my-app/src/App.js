import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

  state = {
    username : 'superHammas'
  }

  nameChangeHandler = (event) =>{
    this.setState({username : event.target.value});
  }

  render(){
  return (
    <div className="App">
      <UserInput changed={this.nameChangeHandler}
      currentname={this.state.username}/>
      <UserOutput username={this.state.username}/>
      <UserOutput username='Hammas'/>
      <UserOutput username='Hammas'/>
    </div>
  );
}
}

export default App;
