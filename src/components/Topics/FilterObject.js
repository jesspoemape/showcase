import React, { Component } from 'react';

class componentName extends Component {
constructor() {
    super();
    this.state = {
        unFilteredArray: [{"make":"Honda", "model":"Accord", "trim":"Sport", "color":"white", "year":2016, "nickName":"Sylvia"}, 
        {"make":"Toyota", "model":"Camry", "color":"gold"}, 
        {"make":"Ford", "model":"Explorer", "trim":"Sport", "color":"green", "nickName":"Konstantinos"}, 
        {"make":"Mercedes", "model":"S650", "color":"red", "year":2017}],
        userInput: "",
        filteredArray: []
    }
}

handleChange(val) {
    this.setState({
        userInput: val
    });
}

fSolution(userInput) {
    var inputVal = this.state.userInput;
    var newArr = this.state.unFilteredArray.filter((el) => (el[inputVal]));  

    this.setState({filteredArray: newArr});
}


    render() {
        return (
            <div className="puzzleBox">
                <h4>Filter Object</h4>
                <p>Enter one of the properties of a car object to see a list of car objects with that property.</p>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray) }</span>
                <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value);} }></input>
                <button className="confirmationButton" onClick={ () => {this.fSolution(this.state.userInput)} }>Filter</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray) }</span>
            </div>
        );
    }
}

export default componentName;