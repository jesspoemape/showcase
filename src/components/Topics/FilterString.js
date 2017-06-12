import React, { Component } from 'react';

class FilterString extends Component {
constructor() {
    super();
    this.state = {
        names: ['Jessica', 'Miguel', 'Juan', 'Jorge', 'Michael', 'Alondra', "Fernando", 'Arcadio', 'Alexander'],
        userInput: "",
        filteredNames: []
    };
}

handleChange(val) {
    this.setState({userInput: val});
}

fsSolution(userInput) {
    var nArr = [];
    var input = this.state.userInput;
    var testArr = this.state.names;
    console.log(input);
    for (var i = 0; i < testArr.length; i++) {
        if(testArr[i].includes(input)) {
            nArr.push(testArr[i]);
        }
    }
    this.setState({filteredNames: nArr});
}


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: { JSON.stringify(this.state.names) }</span>
                <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value); } }/>
                <button className="confirmationButton" onClick={ () => {this.fsSolution()} }>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredNames) }</span>
            </div>
        );
    }
}

export default FilterString;