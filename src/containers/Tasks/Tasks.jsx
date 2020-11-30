import React from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-horizontal-datepicker';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import style from './style.module.scss';
import Task from '../../components/Task/Task';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import WithTranslations from '../../hoc/WithTranslations';

import {
  getTasks,
  createTask,
  toggleTaskStatus,
} from '../../store/actions';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogActive: false,
      selectedDay: null,
      newTaskContent: '',
    }
  }

  componentDidMount() {
    this.props.getTasks();
  }

  selectDay = (val) => {
    this.setState({
      selectedDay: val,
      draggedTask: null
    })
  }

  openDialog = () => {
    this.setState({dialogActive: true});
  }

  closeDialog = () => {
    this.setState({
      dialogActive: false,
      newTaskContent: '',
    });
  }

  saveTask = () => {
    this.props.createTask({
      description: this.state.newTaskContent,
      date: "2020-11-06",
      alarm: "2020-11-06",
    });
  }
  
  onDragStart = (data) => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
    this.setState({
      draggedTask: data.draggableId
    })
  }

  onDragEnd = (result) => {
    const {source, destination} = result;
    if (source.droppableId === destination.droppableId) return

    this.props.toggleTaskStatus(this.state.draggedTask)
    this.setState({
      draggedTask: null
    })
  }

  render() {
    const OpenTasks = [];
    const DoneTasks = [];

    if (Object.keys(this.props.tasks).length) {
      Object.keys(this.props.tasks).map((el, idx) => {
        const task = this.props.tasks[el];
        const DraggableTask = 
        <Draggable key={task.id}
          index={idx}
          draggableId={task.id}>
          {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            key={task.id}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <Task {...task}/>
          </div>
          )}
        </Draggable>

        if (!task.archived) {
          OpenTasks.push(DraggableTask)
        } else {
          DoneTasks.push(DraggableTask)
        }
      })
    }

    return (
      <div className={style.tasks}>
        <div className={style.datepicker}>
          <DatePicker
            labelFormat={"MMMM"}
            getSelectedDay={this.selectDay}/>
        </div>
        <div className={style.container}>
          <DragDropContext onDragEnd={this.onDragEnd}
            onDragStart={this.onDragStart}>
            <Droppable droppableId="open_tasks">
            {(provided, snapshot) => (
              <div className={style.open_tasks}
                ref={provided.innerRef}>
                <div className={style.add_new_task}>
                  <IconButton
                    onClick={this.openDialog}>
                    <span className="material-icons">add_box</span>
                  </IconButton>
                  <hr className={style.separator}/>
                  {OpenTasks}
                  {provided.placeholder}
                </div>
              </div>
            )}
            </Droppable>
            <Droppable droppableId="done_tasks">
            {(provided, snapshot) => (
              <div className={style.done_tasks}
                ref={provided.innerRef}>
                {DoneTasks}
                {provided.placeholder}
              </div>
            )}
            </Droppable>
          </DragDropContext>
        </div>
        <Dialog open={this.state.dialogActive}
          onClose={this.closeDialog}
          fullWidth>
          <DialogTitle>{this.props.translate('tasks_new')}</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              value={this.state.content}
              onChange={(e) => {
                this.setState({
                  newTaskContent: e.target.value,
                })
              }}
              label={this.props.translate('tasks_description')}
              multiline
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              {this.props.translate('tasks_discard_btn')}
            </Button>
            <Button onClick={this.saveTask}
              color="primary"
              variant="contained">
              {this.props.translate('tasks_save_btn')}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.data,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks() {
      dispatch(getTasks());
    },
    toggleTaskStatus(id) {
      dispatch(toggleTaskStatus(id));
    },
    createTask(data) {
      dispatch(createTask(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithTranslations(Tasks));
