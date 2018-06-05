import React, { Component } from 'react';
//import $ from "jquery";
import './css/receita.css';

export default class Receita extends Component {

    /*constructor(props) {
        super(props);
        //this.state = { value: '' };
    }

    componentDidMount(){

    }*/

    render() {
        return (
            <div id="receita" className="content">
                <figure className="img" style={{backgroundImage:"url(http://www.padariaeconfeitariabrasil.com.br/wp-content/uploads/2015/12/MGL2430.jpg)"}}></figure>
                <div id="infos">
                    <p className="titulo">Lorem ipsum</p>
                    <p className="ingredientes"><strong>Ingredientes:</strong> Lorem ipsum dolor sit amet</p>
                    <p className="titulo-preparo"><strong>Modo de preparo:</strong></p>
                    <div className="modo-preparo">
                        <p><strong>Passo 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p><strong>Passo 2:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p><strong>Passo 3:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p><strong>Passo 4:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p><strong>Passo 5:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        );
    }
}