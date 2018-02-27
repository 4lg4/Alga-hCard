/**
 * Created by www.Alga.me on 26/2/18.
 */

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import style from './style.css';

class AlgaField extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.props.onUpdate(event.target.value);
  }

  render() {
    const { label, value } = this.props;

    return (
      <div className="AlgaField">
        <label className="AlgaField__label">{label}</label>
        <input
          type="text"
          onChange={this.handleOnChange}
          value={value}
          className="AlgaField__input"
        />
      </div>
    );
  }
}

AlgaField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CSSModules(AlgaField, style);
