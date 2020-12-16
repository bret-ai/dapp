import React, { Component } from 'react';
import { thorify } from "thorify";
import './App.css';
import logo from './logo.svg';


class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const Web3 = require("web3");    
    const web3 = await thorify(new Web3(), "http://81.169.183.26");
    web3.eth.getBalance("0xA6BbC02898a9b1B95D449f3E92D615431fA9D0AA").then(res => {
      console.log(res);
      this.setState({ accountBal: res })
    })

    this.setState({ loading: false })
  }

  constructor(props) {
    super(props)
    this.state = {
      accountBal: '',
      loading: true
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Marketplace Prototype.
          </p>
          <div className="account__info">
            <h5>Your accounct info</h5>
            <p>VET: {this.state.accountBal}</p>
          </div>        
        </header>
    </div>
    );
  }
}

export default App;