import React, { Component } from 'react';
import './App.css';
import './AppCustom.css';
import axios from 'axios';
import Game from './GameComponent/Game';
import NewGame from './NewGameComponent/NewGame';

class App extends Component {
  state = {
    games: [],
    score: 0
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
          data: {title: "Firewatch", 
                img: "./media/firewatch.jpg", 
                description: `Firewatch is a mystery set in the Wyoming wilderness, 
                where your only emotional lifeline is the person on the other end of a handheld radio. The year is 1989.`},
          contentType: "application/JSON"
        }).then(response => {
            console.log(response);
        }); 
      }
  
        upVoteHandler = () => {
          this.setState((prevState) => {
            return {score: prevState.score + 1};
          });
        }
      
        downVoteHanlder = () => {
          this.setState((prevState) => {
            return {score : prevState.score -1};
          });
        }
        
        getNewData = () => {
          axios.get("https://game-site-705ad.firebaseio.com/games.json")
            .then(response => {
                let newData = Object.values(response.data);
                newData.map(el => {
                  console.log(el.title + " " + el.description);
                })
            });
        }

  render() {
    
      let games = this.state.games.map((el, ind) => {
          return <Game 
            title={el.title} 
            img={el.img} 
            description={el.description} 
            upVote={this.upVoteHandler}
            downVote={this.downVoteHanlder}
            key={ind}
            score={this.state.score}/>
      });
    
      return (
        <div>
          <nav className="Nav navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1" id="Nav">Game Ranker</span>
          </nav>
          <div className="container">
              {games}
              <NewGame />
          </div>
          <div>
            <button onClick={this.getNewData}>Get Data</button>
          </div>
        </div>
      );    
    }
  }

export default App;
