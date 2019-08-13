import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { withToastManager } from 'react-toast-notifications';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import style from './login.module.scss';
import withTranslations from '../../hoc/with-translations';
import { loginUser } from '../../api/user';

class Login extends React.Component {
  
  redirectToRegister = () => {
    const { history } = this.props;
    history.push('/register');
  };

  render() {
    return (
      <div className={style.login}>
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
                loginUser(values);
              } catch (e) {
                this.props.toastManager.add(e.message, { appearance: 'error'});
              }
            }}>
              {({values, errors, touched, handleBlur, handleChange}) => (
              <Form>
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
              </Form>
            )}
        </Formik>
        <Button color="secondary"
          className={style.btn}
          variant="contained"
          size="large"
          type="submit"
          fullWidth
          onClick={this.redirectToRegister}>
          {this.props.translate('login_register_btn')}
        </Button>
      </div>
    )
  }
}

export default withToastManager(withTranslations(Login));
