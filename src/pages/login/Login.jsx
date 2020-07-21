import React from 'react';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {toast} from 'react-toastify';
import {connect} from 'react-redux';

import style from './login.module.scss';
import WithTranslations from '../../hoc/WithTranslations';
import Logo from '../../components/Logo';
import {authenticate} from '../../store/actions';

class Login extends React.Component {
  navigateToRegister = () => {
    const { history } = this.props;
    history.push('/register');
  };

  navigateToHome = () => {
    const { history } = this.props;
    history.push('/');
  }

  authenticate = async (data) => {
    return await this.props.authenticate(data);
  }

  render() {
    return (
      <div className={style.login}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.form}>
          <Formik
            initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={yup.object().shape({
                email: yup.string()
                  .required(this.props.translate('form_field_required'))
                  .email(this.props.translate('form_field_invalid_email')),
                password: yup.string()
                  .required(this.props.translate('form_field_required')),
              })}
              onSubmit={async (values) => {
                try {
                  await this.authenticate(values);
                } catch (e) {
                  toast.error(e.message);
                }
              }}>
                {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    component={TextField}
                    type="email"
                    id="email"
                    name="email"
                    margin="dense"
                    label={this.props.translate('form_field_email')}
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.email && touched.email}
                    helperText={(errors.email && touched.email) && errors.email}
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    type="password"
                    id="password"
                    name="password"
                    margin="dense"
                    label={this.props.translate('form_field_password')}
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.password && touched.password}
                    helperText={(errors.password && touched.password) && errors.password}
                    variant="outlined"
                    fullWidth
                  />
                  <Button color="primary"
                    className={style.btn}
                    variant="contained"
                    size="large"
                    type="submit"
                    fullWidth>
                    {this.props.translate('login_login_btn')}
                  </Button>
                </form>
              )}
          </Formik>
          <Button color="secondary"
            className={style.btn}
            variant="contained"
            size="large"
            type="submit"
            fullWidth
            onClick={this.navigateToRegister}>
            {this.props.translate('login_register_btn')}
          </Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate(data) {
      return dispatch(authenticate(data));
    },
  }
}

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default WithTranslations(LoginContainer);
