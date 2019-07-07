import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import { act, Simulate } from 'react-dom/test-utils';
import App from './App';
import DateRangePickerWrapper from './datepicker/DateRangePickerWrapper'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('display the date picker as it should', () => {
  const testRenderer = TestRenderer.create(<App />);
  const testInstance = testRenderer.root;
  expect(testInstance.findByType(DateRangePickerWrapper));
});

it('display the mail Table when result > 0', () => {
  let container = document.createElement('div');
  act(() => {
    ReactDOM.render(<App />, container);
  });

  const input =  container.querySelector('input');
  act(() => {
    Simulate.change(input, { target: { value: '2019-12-30' } });
  });

  expect(container.getElementsByClassName('MuiTable-root')[0]).toBeTruthy();

  act(() => {
    Simulate.change(input, { target: { value: '2020-01-02' } });
  });

  expect(container.getElementsByClassName('MuiTable-root')[0]).toBeUndefined();

});