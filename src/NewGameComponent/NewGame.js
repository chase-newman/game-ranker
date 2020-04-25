import React, { Component } from 'react';
import axios from 'axios';


class NewGame extends Component {
    state = {
        title: '',
        description: '',
        imgURL: ''
    }
    
    titleChangeHandler = (event) => {
        this.setState({
            title: event.target.value
        });
    }
    
    descriptionChangeHandler = (event) => {
        this.setState({
            description: event.target.value
        });
    }
    
    imgURLChangeHanlder = (event) => {
        this.setState({
            imgURL: event.target.value
        });
    }
    
    submitDataHandler = () => {
        axios({
            url: "https://game-site-705ad.firebaseio.com/games.json",
            method: "post",
            data: {
                title: this.state.title,
                description: this.state.description,
                imgURL: this.state.imgURL
            },
            contentType: "application/JSON"
        }).then(response => {
            console.log(response);
        })
    }
    
    render() {
      return (
          <div className="row align-items-center">
            <div className="col-md-8">
                <label>Game Title</label>
                <input onChange={this.titleChangeHandler}type="text" className="form-control" />
                
                <label>Description</label>
                <input onChange={this.descriptionChangeHandler}type="text" className="form-control" />
                
                <label>Game Image URL</label>
                <input onChange={this.imgURLChangeHanlder}type="text" className="form-control" />
                <button onClick={this.submitDataHandler} className="btn btn-primary">Submit Data</button>
            </div>
          </div>
        );   
    }
}

export default NewGame;