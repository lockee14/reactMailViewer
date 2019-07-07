import React from 'react';
import ReactDOM from 'react-dom';
import MailTable from './mailTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MailTable mailHeaders={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});