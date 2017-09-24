import React, { Component } from 'react';
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";
import ConvertStringToCamelCase from './../Topics/ConvertStringToCamelCase';

class TopicBrowser extends Component {
    render() {
        return (
            <div className='puzzleFeed'>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
                <ConvertStringToCamelCase />
            </div>
        );
    }
}

export default TopicBrowser;