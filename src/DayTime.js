import React, { Component } from 'react';


class DayTime extends Component {

  // constructor(props){
  //     super(props);
  // }


  render() {

    return (
      <div className="DayTime" >
        <select onChange={ (e) => this.props.onChange("day", this.props.index, e.target.value)}
                value={this.props.day}>
            {
                this.props.days.map(function(day,i) {
                    //let selected = (this.props.day === day) ?  'selected': '';
                    return <option key={i} value={day}> {day} </option>;
                })
            }
        </select>
        <select onChange={ (e) => this.props.onChange("fromHour", this.props.index, e.target.value)}
                value={this.props.fromHour}>
            {
                this.props.hours.map(function(hour,i) {
                    return <option key={i} value={hour}> {hour} </option>;
                })
            }
        </select> :
        <select onChange={ (e) => this.props.onChange("fromMinute", this.props.index, e.target.value)}
                value={this.props.fromMinute}>
            {
                this.props.minutes.map(function(minute,i) {
                    return <option key={i} value={minute}> {minute} </option>;
                })
            }
        </select> to
        <select onChange={ (e) => this.props.onChange("toHour", this.props.index, e.target.value)}
                value={this.props.toHour}>
            {
                this.props.hours.map(function(hour,i) {
                    return <option key={i} value={hour}> {hour} </option>;
                })
            }
        </select> :
        <select onChange={ (e) => this.props.onChange("toMinute", this.props.index, e.target.value)}
                value={this.props.toMinute}>
            {
                this.props.minutes.map(function(minute,i) {
                    return <option key={i} value={minute}> {minute} </option>;
                })
            }
        </select>
        <button onClick={ (e) => this.props.onClick(this.props.index)}>X</button>
      </div>
    );
  }

}

export default DayTime;
