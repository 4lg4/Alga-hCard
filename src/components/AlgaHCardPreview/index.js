/**
 * Created by www.Alga.me on 26/2/18.
 */

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import style from './style.css';

import AlgaButton from '../AlgaButton';

class AlgaHCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agoraSim: true,
    };

    this.handleDownload2 = this.handleDownload2.bind(this);
  }

  handleDownload() {
    console.log('handleDownload', this);
  }

  handleDownload2() {
    console.log('handleDownload2', this.state);
    this.setState({ agoraSim: false });
  }

  render() {
    const { testVar } = this.props;
    const { agoraSim } = this.state;

    return (
      <div className="AlgaHCard">
        <div className="AlgaHCard__header">preview</div>
        <div className="AlgaHCard__body">{ testVar }</div>
        <div className="AlgaHCard__footer">
          <AlgaButton title="Download" click={this.handleDownload2} />
          <AlgaButton title="test" disabled={agoraSim} click={this.handleDownload} />
        </div>
      </div>
    );
  }
};

AlgaHCard.propTypes = {
  testVar: PropTypes.string.isRequired,
};

export default CSSModules(AlgaHCard, style);
