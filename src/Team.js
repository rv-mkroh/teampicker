import React from 'react';

function Team(props) {
  return (
    <section className="team">
            <h2>{props.name}</h2>
            <ul className="teamlist">
              { props.players.map(function(player, index) {
                  if(player.team === props.teamcode) {
                    return (
                      <li key={index}>{player.name} <span className="options">Transfer to:  <button>Team 1</button> <button>Team 2</button></span></li>
                    );
                  }
                })
              }
            </ul>
          </section>
  );
}

export default Team;