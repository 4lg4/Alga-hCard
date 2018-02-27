/**
 * Created by www.Alga.me on 26/2/18.
 */

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// import PropTypes from 'prop-types';

import style from './style.css';

import AlgaField from '../AlgaField';
import AlgaButton from '../AlgaButton';

class AlgaHCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false,
    };
  }

  sendForm() {
    console.log('sendForm', this);
  }

  render() {
    const { isFormValid } = this.state;

    return (
      <div className="AlgaHCardForm">
        <div className="AlgaHCardForm__header">
          <h3>hCard</h3>
          <small>form generator</small>
        </div>
        <div className="AlgaHCardForm__body">
          <AlgaField />
        </div>
        <div className="AlgaHCardForm__footer">
          <AlgaButton click={this.sendForm} disabled={isFormValid} />
        </div>
      </div>
    );
  }
}

// AlgaField.defaultProps = {
//   disabled: false,
//   title: '',
// };
// ComponentClassTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   disabled: PropTypes.bool,
//   click: PropTypes.func.isRequired,
// };

export default CSSModules(AlgaHCardForm, style);
