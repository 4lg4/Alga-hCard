/**
 * Created by www.Alga.me on 26/2/18.
 */

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// import PropTypes from 'prop-types';

import style from './style.css';


class ComponentClassTemplate extends Component {
  constructor(props) {
    super(props);

    this.defaultProp = {
      disabled: false,
      title: '',
    };

    this.state = Object.assign({}, this.defaultProp, this.props);
  }

  render() {
    const { title, disabled } = this.state;

    return (
      <button
        className="ComponentClassTemplate"
        onClick={this.props.click}
        disabled={disabled}
      >{title}
      </button>
    );
  }
}

// ComponentClassTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   disabled: PropTypes.bool,
//   click: PropTypes.func.isRequired,
// };

export default CSSModules(ComponentClassTemplate, style);
