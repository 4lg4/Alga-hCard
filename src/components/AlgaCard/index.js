/**
 * Created by www.Alga.me on 26/2/18.
 */

import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import style from './style.css';


const AlgaCard = (props) => {
  const { testVar } = props;

  console.log('SHIT react', testVar);

  return (
    <div className="AlgaCard">
      <div className="AlgaCard__header">Header</div>
      <div className="AlgaCard__body">{ testVar }</div>
      <div className="AlgaCard__footer">Footer</div>
    </div>
  );
};

AlgaCard.propTypes = {
  testVar: PropTypes.string.isRequired,
};

export default CSSModules(AlgaCard, style);
