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
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value);} }/>
                <button className="confirmationButton" onClick={ () => {this.palSolution(this.state.userInput);} }>Check</button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
            </div>
        );
    }
}

export default Palindrome;