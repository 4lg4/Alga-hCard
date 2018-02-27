/**
 * Created by www.Alga.me on 26/2/18.
 */

import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import style from './style.css';


const ComponentTemplate = (props) => {
  const { testVar } = props;

  return (
    <div className="ComponentTemplate">
      <div className="ComponentTemplate__body">{ testVar }</div>
    </div>
  );
};

ComponentTemplate.propTypes = {
  testVar: PropTypes.string.isRequired,
};

export default CSSModules(ComponentTemplate, style);
