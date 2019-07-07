import React from 'react';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './DateRangePickerWrapper.css'

import calender from '../assets/icon_calender.svg'
import search from '../assets/icon_search.svg'

function arrow_icon(props) {
  return(
    <div className="dash"></div>
  );
}

function search_icon(props) {
  return(
    <img src={search} className="searchIcon" alt="logo" />

  );
}

function calendar_icon(props) {
  return(
    <img src={calender} className="calendarIcon" alt="logo" />
  );
}

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = null;
    } else if (props.autoFocusEndDate) {
      focusedInput = null;
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    if(props.initialStartDate !== undefined && props.initialEndDate !== undefined) {
      let start = props.initialStartDate.clone();
      let end = props.initialEndDate;
      let arr = [start.format('YYYY/MM/DD')];
      while(start._d.getTime() < end._d.getTime()) {
        start.add(1, 'd');
        arr.push(start.format('YYYY/MM/DD'));
      }
      this.props.getDateRange(arr);
    }
  }

  onDatesChange({ startDate, endDate }) {
    let start, end, arr;
    if(startDate !== null && endDate !== null) {
      start = startDate.clone();
      end = endDate;
      arr = [start.format('YYYY/MM/DD')];
      while(start._d.getTime() < end._d.getTime()) {
        start.add(1, 'd');
        arr.push(start.format('YYYY/MM/DD'));
      }
      this.props.getDateRange(arr);
    }
    
    this.setState({
      startDate: startDate,
      endDate: endDate
    });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    return (
      <div>
        <DateRangePicker
          customInputIcon={calendar_icon()}
          customArrowIcon={arrow_icon()}
          customCloseIcon={search_icon()}
          reopenPickerOnClearDates={true}
          showClearDates={true}
          minimumNights={0}
          displayFormat={'YYYY/MM/DD'}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          startDateId={'startDateId'}
          endDateId={'endDateId'}
        />
      </div>
    );
  }
}

export default DateRangePickerWrapper;