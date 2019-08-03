import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './register.module.scss';

class Register extends React.Component {
  render() {
    return (
      <div className={style.register}>
        <TextField
          margin="dense"
          label="translation.first_name"
          variant="outlined"
          fullWidth
        />
        <TextField
          margin="dense"
          label="translation.last_name"
          variant="outlined"
          fullWidth
        />
        <TextField
          margin="dense"
          label="translation.email"
          variant="outlined"
          fullWidth
        />
        <TextField
          margin="dense"
          label="translation.password"
          type="password"
          variant="outlined"
          fullWidth
        />
        <TextField
          margin="dense"
          label="translation.repeat_password"
          type="password"
          variant="outlined"
          fullWidth
        />
        <Button color="primary"
          className={style.registerBtn}
          variant="contained"
          size="large"
          fullWidth>
          translation.register
        </Button>
      </div>
    )
  }
}

export default Register;
