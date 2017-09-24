import React, { Component } from 'react';

class ConvertStringToCamelCase extends Component {
    constructor() {
        super();
        this.state={
            userInput: '',
            result: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.solution = this.solution.bind(this);
    }

    handleChange(e) {
        this.setState({userInput: e.target.value})
    }
solution() {
    let str = this.state.userInput;

    function capitalizeFirstLetter(s) {
        return s.map((word, i) => {
        if (i === 0) {
            return word;
        }
        else {
            return word.slice(0, 1).toUpperCase() + word.slice(1);
        }
        });
    }
    
    if (str.length === 0) {
        return str;
    }
    else if (str.includes("-")) {
        this.setState({
            result: capitalizeFirstLetter(str.split("-")).join("")
        });
    }
    else if (str.includes("_")) {
        this.setState({
            result: capitalizeFirstLetter(str.split("_")).join("")
        });
    }
}

    render() {
        return (
        <div className='puzzleBox'>
            <h4>Convert String to Camel Case</h4>
            <p>Enter a dash or underscore separated word to be converted to camel case. </p>
            <p>Example: the-stealth-warrior converts to theStealthWarrior.</p>
            <input className="inputLine" value={this.state.userInput} onChange={ (e) => {this.handleChange(e);} }></input>
            <button className="confirmationButton" onClick={this.solution}>Convert</button>
            <span className="resultsBox">CamelCase: {this.state.result}</span>
        </div>
        );
    }
}

export default ConvertStringToCamelCase;