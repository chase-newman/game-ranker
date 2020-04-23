import React, { Component } from 'react';
import './App.css';
import './AppCustom.css';
import Game from './GameComponent/Game';

class App extends Component {
  state = {
    games: [
        {title: "Cuphead", 
         img: "./media/cuphead.png", 
         description: `Cuphead is a classic run and gun action game heavily focused on boss battles. 
         Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, 
         i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings`},
        {title: "Stardew Valley", 
         img: "./media/stardew-valley.jpeg", 
         description: `In Stardew Valley, players take the role of a character who, to get away from the hustle of the city, 
         takes over their deceased grandfather's dilapidated farm in a place known as Stardew Valley. 
         The game is open-ended, allowing players to take on several activities such as growing crops, raising livestock, crafting goods, mining for ores, selling produce, and socializing with the townsfolk, including marriage and having children.`},
        {title: "Dead Cells", 
         img: "./media/dead-cells.jpg", 
         description: `In Stardew Valley, players take the role of a character who, to get away from the hustle of the city, 
         takes over their deceased grandfather's dilapidated farm in a place known as Stardew Valley. 
         The game is open-ended, allowing players to take on several activities such as growing crops, raising livestock, crafting goods, mining for ores, selling produce, and socializing with the townsfolk, including marriage and having children.`}
      ]
  }
  
  render() {
    
      let games = this.state.games.map(el => {
          return <Game title={el.title} img={el.img} description={el.description} />
      });
    
      return (
        <div>
          <nav className="Nav navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1" id="Nav">Game Ranker</span>
          </nav>
          <div className="container">
              {games}
          </div>
        </div>
      );    
    }
  }

export default App;
