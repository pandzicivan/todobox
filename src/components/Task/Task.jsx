import React from 'react';
import {useDispatch} from 'react-redux';
import {EDIT_TASK_SUCCESS} from  '../../store/actions';
import {
  edit,
} from '../../api/tasks';
import style from './style.module.scss';
import Checkbox from '@material-ui/core/Checkbox';

const Task = (props) => {
  const dispatch = useDispatch();
  const done = !!props.archived;

  const editTask = async () => {
    const task = await edit({
      id: props.id,
      description: props.description,
      date: "2020-11-06",
      alarm: "2020-11-06",
      archived: !done,
    });
    
    dispatch({
      type: EDIT_TASK_SUCCESS,
      data: task,
    })
  }

  return (
    <div className={style.task}>
      <Checkbox
        onChange={editTask}
        checked={done}
        color="primary"/>
      <p className={style.content}>
        {props.description}
      </p>
    </div>
  )
}

export default Task;
