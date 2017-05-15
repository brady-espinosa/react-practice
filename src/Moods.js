import React, { Component } from 'react';

class Moods extends Component {
  render() {
      let moods = this.props.moods.map(function(mood){
      return(
        <li key={mood.name}>{mood.name}</li>
      )
    })
    return (
      <div>
        <h2>His moods include</h2>
        <ul>
          {moods}
        </ul>
      </div>
    )
  }
}

  export default Moods;
