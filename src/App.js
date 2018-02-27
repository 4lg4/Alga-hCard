import React, { Component } from 'react';

import './App.css';

import logo from './assets/logo.svg';
import myAvatar from './assets/avatar.png';

import AlgaHCard from './components/AlgaHCard';
import AlgaCard from './components/AlgaCard';
import AlgaField from './components/AlgaField';


class App extends Component {
  constructor(props) {
    super(props);

    // TODO: next version use some single source of truth
    this.state = {
      loading: false,

      // hCard reference (http://microformats.org/wiki/hcard)
      fn: '',
      nickname: '',
      org: '',
      photo: myAvatar,
      email: '',
      tel: '',
      streetAddress: '',
      locality: '',
      region: '',
      postalCode: '',
      countryName: '',
    };


    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
  }

  componentWillUnmount() {
    // if (this.state.photo !== myAvatar) {
    //   window.URL.revokeObjectURL(this.state.photo);
    // }
  }

  onUpdate(value) {
    console.log(this, value);
    this.setState({ fn: value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <hr />
        <AlgaCard testVar="LALALALA" />
        <hr />
        <AlgaField value={this.state.fn} label="The Label" onUpdate={this.onUpdate} />
        {this.state.fn}
        <hr />
        <AlgaHCard testVar="aaaa" />
      </div>
    );
  }
}

export default App;
