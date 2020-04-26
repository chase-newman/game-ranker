import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Game from './GameComponent/Game';


class App extends Component {
    state = {
      games: null
    }
      
    /*Using componenDidMount to get the data from the backend - Firebase
      The database contains the data for our games (stored in state) including title, description and URL */
      
    componentDidMount() {
      axios.get("https://game-site-705ad.firebaseio.com/games.json")
        .then(response => {
            // console.log(response);
            // console.log(Object.keys(response.data));
            // for(let game in response.data) {
            //   console.log(response.data[game])
            // }
            //Loop through the data and inject the unique ID as a key
            let gamesArr = response.data
            for(let key in gamesArr) {
              gamesArr.key = key
            }
            console.log(gamesArr)
          
        })
    }
    
    /*This is a post data handler that allows me to post data to the database manually to the backend*/
    
    postDataHandler = () => {
      axios({
        url: "https://game-site-705ad.firebaseio.com/games.json",
        method: "post",
        data: {
          title: "Dead Cells",
          description: `Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. 
          You'll explore a sprawling, ever-changing castle... 
          assuming you're able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.`,
          imgURL: "https://www.nintendo.com/content/dam/noa/en_US/games/switch/d/dead-cells-switch/dead-cells-switch-hero.jpg"
        },
        contentType: "application/JSON"
      }).then(response => {
        console.log(response); 
      })
    }
    
  render() {
  
    
  
    
      return (
          <div className="container">
            <h1>Game Ranker </h1>
            {/*Here I want to loop through a list of games and output them to the DOM using my Games Component... */}
            
            <div className="row">
            {/*The Post Data handler will be removed once all data is uploaded to Firebase*/}
              <button onClick={this.postDataHandler}>POST Data</button>
            </div>
          </div>
      );    
    }
  }

export default App;
