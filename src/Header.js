import React, { Component } from 'react';

class Header extends Component {
  render() {
      let enemies = this.props.enemy.map(function(enemy){
      return(
        <li key={enemy.name}>{enemy.name}</li>
      )
    })
    return (
      <div>
        <h2>His enemies include</h2>
        <ul>
          {enemies}
        </ul>
      </div>
    )
  }
}

  export default Header;
