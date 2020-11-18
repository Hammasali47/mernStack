import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './Input/Input';
import UserOutput from './Output/Output';


class App extends Component {


  state = {
    persons: [
      {name: "Max",age: 28},
      {name: "Hammas",age:23},
      {name: "wiki",age:15}
    ],
    otherState:'some other value'
  }

  SwitchnameHandler= (newName) =>{

    this.setState({
      persons: [
        {name: newName,age: 28},
        {name: "Hammas",age:23},
        {name: "wiki",age:11}
      ]
    })

  }
  ChangeNameHAndler =(event) =>{

    this.setState({
      persons: [
        {name: 'Max',age: 28},
        {name: event.target.value,age:23},
        {name: "wiki",age:11}
      ]
    })

  }





  render() {
    const style ={
      backgroundColor: 'white',
      front:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <h1>My name is Hammas Ali Qaiser</h1>
        <button
        style={style}
        onClick={ () => this.SwitchnameHandler('Maxi!!')}>Switch name</button>
        <Person
         name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.SwitchnameHandler.bind(this,'Max!')}
        changed ={this.ChangeNameHAndler}>My hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>

        <UserInput/>
        <UserOutput username={this.state.persons[0].name}/>
        <UserOutput username={this.state.persons[2].name}/>

        
      </div>
    );
  }
}

export default App;
