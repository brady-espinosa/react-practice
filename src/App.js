import React, { Component } from 'react';
import logo from './nick.jpg';
import './App.css';
import { Navbar, Jumbotron, Button, Grid } from 'react-bootstrap';

class App2 extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand className="brander">
                <a href="/">Lets get ready to Nick!</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to Nick Picks</h1>
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p className="App-intro">
                Please Enjoy this Spinning nick pic
              </p>
            </div>
            <p>
              <Button
                className="getButton"
                bsStyle="success"
                bsSize="large"
                href="https://www.linkedin.com/in/nickbouldien/"
                target="_blank">
                Get more of that Nick!
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (

//     );
//   }
// }

export default App2;
// export default App;
