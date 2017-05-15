import React, { Component } from 'react';
import logo from './nick.jpg';
import './App.css';
import Header from './Header'
import Moods from './Moods'
import { Navbar, Jumbotron, Button, Grid, Row, Col, Clearfix} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      moods: [
        {name: 'giddy'},
        {name: 'feisty'},
        {name: 'Rachel just stole my domain!'}
      ],
      enemy: [
        {name: 'Rachel'},
        {name: 'Brady'},
        {name: 'inner booth seats'}
      ]
    }
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Welcome to Nick Pics</h1>
            <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
              <p className="App-intro">
                Please Enjoy this Spinning nick pic
              </p>
            </div>
          </Grid>
        </Jumbotron>
        <Header enemy={this.state.enemy}/>
        <Moods moods={this.state.moods}/>
      </div>
    );
  }
}


export default App;
