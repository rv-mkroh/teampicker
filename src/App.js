import React, { Component } from 'react';
import initState from './initstate';

class App extends Component {

  constructor() {
    super();
    this.state = initState;
    this.handleReassign = this.handleReassign.bind(this);
  }

  handleReassign(player, team) {
    let players = this.state.players.slice();
    players[player].team = team;
    this.setState({
      players
    });

  }
  render() {
    return (
      <div id="container">
        <section id="teams">
        <section className="team">
          <h2>Team 1</h2>
          <ul className="teamlist">
            { this.state.players.map(function(player, index) {
                if(player.team === "1") {
                  return (
                    <li key={index}>{player.name} <span className="options">Transfer to:  <button onClick={()=>{ this.handleReassign(index, "0"); }}>Unassign</button> <button onClick={()=>{ this.handleReassign(index, "2"); }}>Team 2</button></span></li>
                  );
                }
                return;
              }, this)
            }
          </ul>
        </section>
        <section className="team">
          <h2>Team 2</h2>
          <ul className="teamlist">
            { this.state.players.map(function(player, index) {
                if(player.team === "2") {
                  return (
                    <li key={index}>{player.name} <span className="options">Transfer to:  <button onClick={()=>{ this.handleReassign(index, "0"); }}>Unassign</button> <button onClick={()=>{ this.handleReassign(index, "1"); }}>Team 1</button></span></li>
                  );
                }
                return;
              }, this)
            }
          </ul>
        </section>
        </section>
        <section id="unassigned">
          <section className="team">
            <h2>Unassigned</h2>
            <ul className="teamlist">
              { this.state.players.map(function(player, index) {
                  if(player.team === "0") {
                    return (
                      <li key={index}>{player.name} <span className="options">Transfer to:  <button onClick={()=>{ this.handleReassign(index, "1"); }}>Team 1</button> <button onClick={()=>{ this.handleReassign(index, "2"); }}>Team 2</button></span></li>
                    );
                  }
                  return;
                }, this)
              }
            </ul>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
