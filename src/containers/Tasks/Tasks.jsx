import React from 'react';
import DatePicker from 'react-horizontal-datepicker';
import style from './style.module.scss';

class Tasks extends React.Component {

  selectDay = (val) => {
    console.log(val)
  }

  render() {
    return (
      <div className={style.tasks}>
        <div className={style.datepicker}>
          <DatePicker
            labelFormat={"MMMM"}
            getSelectedDay={this.selectDay}/>
        </div>
      </div>
    );
  }
}

export default Tasks;
