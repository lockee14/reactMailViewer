import React from 'react';
import ReactDOM from 'react-dom';
import DateRangePickerWrapper from './DateRangePickerWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateRangePickerWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});