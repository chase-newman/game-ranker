import React from 'react';
import './Game.css';


const game = (props) => {
        return (
            <div className="card mb-3 game" style={{"maxWidth": "540px"}}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={props.img} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                    <h5 className="card-text">Score: {props.score}</h5>
                    <button 
                      type="button" 
                      className="btn btn-sm btn-outline-primary"
                      onClick={props.upVote}>UpVote</button>
                    <button 
                      type="button" 
                      className="btn btn-sm btn-outline-warning"
                      onClick={props.downVote}>DownVote</button>
                  </div>
                </div>
              </div>
            </div>
        );
    }

export default game;