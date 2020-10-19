import React from 'react';
import style from './style.module.scss';
import Checkbox from '@material-ui/core/Checkbox';

const Task = (props) => {
  return (
    <div className={style.task}>
      <Checkbox
        checked={props.done}
        color="primary"/>
      {props.description}
    </div>
  )
}

export default Task;
