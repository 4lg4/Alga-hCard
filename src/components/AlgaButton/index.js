/**
 * Created by www.Alga.me on 26/2/18.
 */

import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import style from './style.css';


const AlgaButton = (props) => {
  const { title, disabled, click } = props;

  return (
    <button
      className="AlgaButton"
      onClick={click}
      disabled={disabled}
    >{title}
    </button>
  );
};

AlgaButton.defaultProps = {
  disabled: false,
};

AlgaButton.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  click: PropTypes.func.isRequired,
};

export default CSSModules(AlgaButton, style);
