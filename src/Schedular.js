import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

const f = 'h:mm a';
const now = moment().hour(0).minute(0);
function onChange(value) {
  console.log(value && value.format(f));
}
export default class Schedular extends Component {
    render() {

        return (
            <div>
            <TimePicker
                showSecond={false}
                defaultValue={now}
                //className="xxx"
                onChange={onChange}
                format={f}
                //use12Hours
                />
            </div>
        );
    }
}
