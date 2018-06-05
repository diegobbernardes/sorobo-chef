import React, { Component } from 'react';
import $ from "jquery";
import './css/home.css';
import '../node_modules/typeahead.js/dist/typeahead.bundle';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    substringMatcher(strs) {
        return function findMatches(q, cb) {
            // an array that will be populated with substring matches
            var matches = [];

            // regex used to determine if a string contains the substring `q`
            var substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    }

    componentDidMount(){
        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
            'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
            'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        $('#buscador .typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'states',
            source: this.substringMatcher(states)
        });

        $('form').submit(function(e){
            //e.preventDefault();
            //window.location = '/receita/ala-minuta';
            console.log('oi2');
        });

        $('#buscador .tt-menu').click(function(e){
            window.location = '/receita/ala-minuta';
        });
    }

    render() {
        return (
            <div id="home" className="content">
                <div className="wrapper">
                    <p className="titulo">Pesquise por uma receita</p>
                    <form>
                        <div id="buscador">
                            <input className="typeahead" type="text" placeholder="O que você deseja cozinhar?" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}