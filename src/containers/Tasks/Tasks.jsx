import React from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-horizontal-datepicker';
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

  render() {
    let Tasks = null;

    if (Object.keys(this.props.tasks).length) {
      Tasks = Object.keys(this.props.tasks).map((el) => {
        const task = this.props.tasks[el];
        return <Task key={task.id} description={task.description}/>
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
          <div className={style.open_tasks}>
            <div className={style.add_new_task}>
              <IconButton
                onClick={this.openDialog}>
                <span className="material-icons">add_box</span>
              </IconButton>
              <hr className={style.separator}/>
              {Tasks}
            </div>
          </div>
          <div className={style.done_tasks}>
            <Task />
          </div>
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
    createTask(data) {
      dispatch(createTask(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithTranslations(Tasks));
