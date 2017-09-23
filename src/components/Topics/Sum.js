import React, { Component } from 'react';

class Sum extends Component {
constructor() {
    super();
    this.state={
        number1: 0,
        number2: 0,
        sum: null
    }
}

handleChange1(val) {
    this.setState({number1: val});
}
handleChange2(val) {
    this.setState({number2: val});
}

sumSolution(number1, number2) {
    var result = number1 / 1 + number2 / 1;
    this.setState({sum: result});

}




    render() {
        return (
            <div className="puzzleBox">
                <h4>Sum</h4>
                <p>Enter two numbers to get their sum.</p>
                <input className="inputLine" onChange={ (e) => {this.handleChange1(e.target.value);} }/>
                <input className="inputLine" onChange={ (e) => {this.handleChange2(e.target.value)} }/>
                <button className="confirmationButton" onClick={ () => this.sumSolution(this.state.number1, this.state.number2) }>Add</button>
                <span className="resultsBox">Sum: { this.state.sum }</span>
            </div>
        );
    }
}

export default Sum;