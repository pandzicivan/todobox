import React from 'react';
import DatePicker from 'react-horizontal-datepicker';
import style from './style.module.scss';
import Task from '../../components/Task/Task';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import WithTranslations from '../../hoc/WithTranslations';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogActive: false,
    }
  }

  selectDay = (val) => {
    console.log(val)
  }

  openDialog = () => {
    this.setState({dialogActive: true});
  }

  closeDialog = () => {
    this.setState({dialogActive: false});
  }

  render() {
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
            </div>
          </div>
          <div className={style.done_tasks}>
            <Task />
          </div>
        </div>
        <Dialog open={this.state.dialogActive} onClose={this.closeDialog}>
          <h1>Heheh</h1>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              {this.props.translate('tasks_save_btn')}
            </Button>
            <Button onClick={this.closeDialog} color="primary">
              {this.props.translate('tasks_discard_btn')}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default WithTranslations(Tasks);
