import React, { Component } from 'react';
import './App.css';
import './AppCustom.css';
import Game from './GameComponent/Game';
import axios from 'axios';

class App extends Component {
  state = {
    games: []
  }
  
      componentDidMount() {
        axios.get("https://react-notes-61c78.firebaseio.com/games.json")
          .then(response => {
              console.log(response);
              this.setState({
                games: Object.values(response.data)
              })
          });
      }
      
      
      handleData = () => {
        axios({
          url: "https://react-notes-61c78.firebaseio.com/games.json",
          method: "post",
          data: {title: "Dead Cells", 
                img: "./media/dead-cells.jpg", 
                description: `Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. 
                You'll explore a sprawling, ever-changing castle... 
                assuming you're able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.`},
          contentType: "application/JSON"
        }).then(response => {
            console.log(response);
        }); 
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
          <div>
            <button onClick={this.handleData}>Submit Data</button>
          </div>
        </div>
      );    
    }
  }

export default App;
