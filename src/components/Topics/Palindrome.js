import React, { Component } from 'react';

class Palindrome extends Component {
constructor() {
    super();
    this.state = {
        userInput: "",
        palindrome: ""
    }
}

handleChange(val) {
    this.setState({userInput: val});
}

palSolution(userInput) {
var input = this.state.userInput;
var reversed = this.state.userInput.split("").reverse().join("");

var result = (reversed === input) ? "true":"false";

this.setState({palindrome: result});
}


    render() {
        return (
            <div className="puzzleBox">
                <h4>Palindrome</h4>
                <p>Enter a word to check if it is a palindrome.</p>
                <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value);} }/>
                <button className="confirmationButton" onClick={ () => {this.palSolution(this.state.userInput);} }>Check</button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
            </div>
        );
    }
}

export default Palindrome;