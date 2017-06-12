import React, { Component } from 'react';

class EvenAndOdd extends Component {

    constructor() {
        super();
        this.state = { // set the initial state
            evenArray: [],
            oddArray: [],
            userInput: ""
        };
    }

// update the value of userinput on state
    handleChange(val) {
        this.setState({userInput: val});
    }

// class method that solves the toy problem and updates the value of evenArray and oddArray
    eoSolution(userInput) {
        var arr = userInput.split(",");
        var even = [];
        var odd = [];
        
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                even.push( parseInt(arr[i], 10));
            }
            else {
                odd.push( parseInt(arr[i], 10));
            } 
        }

        this.setState({evenArray: even, oddArray: odd});
    }
        

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Even and Odds</h4>
                <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value);} }></input>
                <button className="confirmationButton" onClick={ () => this.eoSolution(this.state.userInput) }>Split</button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        );
    }
}

export default EvenAndOdd;