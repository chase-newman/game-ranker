import React from 'react';
import './Game.css';


const game = (props) => {
        return (
            <div className="card mb-3 game" style={{"maxWidth": "540px"}}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img style={{"height": "100%"}}src={props.img} class="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }

export default game;