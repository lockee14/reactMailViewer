import React from 'react';
import logo from './assets/logo.png'
import './App.css';
import moment from 'moment';

import DateRangePickerWrapper from './datepicker/DateRangePickerWrapper';
import MailTable from './mailTable/mailTable'

import header from './mock_mail/mails_headers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      dateArray: [],
      mailHeaders: [],
      result: 0
    }
  }

  render () {
    let getDateRange = (array) => {
      const l = array.length;
      let result = 0;
      let mailHeaders = []
      for(let i = 0; i < l; i++) {
        if(header[array[i]] !== undefined) {
          result += header[array[i]].length;
          mailHeaders.push(...header[array[i]])
        }
      }

      this.setState({
        dateArray: array,
        mailHeaders: mailHeaders,
        result: result
      });
    }
    
    let startDate = moment("2020-01-02");
    let endDate = moment("2020-01-02");
    return (
      <div className="App">
        <div className="DatePicker">
          {<DateRangePickerWrapper
            getDateRange={getDateRange}
            initialStartDate={startDate}
            initialEndDate={endDate}
          />}
          <div id='result'>
            <h4>Result: {this.state.result} mail(s)</h4>
          </div>
        </div>
        {this.state.result === 0 ? 
          <div className="main_logo">
            <img src={logo} className="icon" alt="logo" />
          </div> :
          <MailTable
            mailHeaders={this.state.mailHeaders}
          />
        }
      </div>
    );
  }
}

export default App;
