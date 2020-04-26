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
            
            /*First, establish a keys array which will hold the unique ID's that are coming from Firebase*/
            let keysArr = Object.keys(response.data);
            
            /*Next, create a games array which will hold all games. Both the games and the unique IDs are store in response.data*/
            let gamesArr = []
            for(let keys in response.data) {
                gamesArr.push(response.data[keys])   
            }
            
           /*Now, we need to loop through both the games array (gamesArr) and the keys array (keysArr)
             and inject a new key value pair into the games array which contains each game as an object.
             */
             /*Here I use a for loop, starting with a counter variable at 0. At each index for the gamesArr, I pull 
             the correspdonging key from the keys array and inject it into the games array.*/
            let counter;
            for(counter = 0; counter < gamesArr.length; counter++ ) {
              gamesArr[counter].key = keysArr[counter];
              console.log(gamesArr);
            }
            /*The result is a gamesArr, that has games object which contain unique keys. Now just setState to the new gamesArr*/
            this.setState({
                games: gamesArr
            });
           
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
