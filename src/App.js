import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Moment from 'react-moment';
 
import "react-datepicker/dist/react-datepicker.css";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }
  handleChangeStart(date) {
    this.setState({
      startDate: date,
    });
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="card text-center">
          <div className="card-header">
            Day counter
          </div> 
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group date">
                <label htmlFor="startDate">Start date</label>
                <DatePicker
                      className="form-control"
                      selected={this.state.startDate}
                      onChange={this.handleChangeStart}
                      placeholderText="Click to select the start date"
                      id="startDate"
                    />
                <small id="emailHelp" className="form-text text-muted">Choose a start date.</small>
              </div>
              <div className="form-group date">
                <label htmlFor="endDate">End date</label>
                <DatePicker
                      className="form-control"
                      selected={this.state.endDate}
                      onChange={this.handleChangeEnd}
                      placeholderText="Click to select the end date"
                      id="endDate"
                    />
                <small id="emailHelp" className="form-text text-muted">Choose an end date.</small>
              </div>
            </form>
          </div>
          <div className="card-footer text-muted">
            {this.state.endDate && (
              <div className="days-number">
                <Moment diff={this.state.startDate} unit="days">{this.state.endDate}</Moment> days
              </div>   
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
