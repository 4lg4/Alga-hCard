import React from 'react';
import ReactDOM from 'react-dom';
import Test from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Test testVar={ 'aaaaa' } />, div);
  ReactDOM.unmountComponentAtNode(div);
});
