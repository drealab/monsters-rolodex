import React, {Component} from 'react';
//import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
constructor(){
  super();
  // this is the state of our app class
  /**
   * Since we want to display a list of monsters in our app
   * our app will have a list of monsters.
   * each monster will have a name property
   */
  this.state = {
    // monsters is a list of monsters
    // normally we wont hard code this data
    // we would get this data from the backend service
    // and create something new

    monsters: [],
    searchField: '' // empty string to start of

    // we will now use the life cycle methods
    // component did mount - when react renders our component for the first time
    
  }  
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters : users}))
}
  render(){
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    // we can combine the above two statements into one by using the following
    // const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder = 'search monsters' handleChange = {e => this.setState({searchField : e.target.value})}/>
        <CardList monsters={filteredMonsters}/>             
      </div>
    );
  }
}

export default App;
