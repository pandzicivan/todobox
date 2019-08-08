import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './register.module.scss';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import withTranslations from '../../hoc/with-translations';
import { registerUser } from '../../api/user';
import { withToastManager } from 'react-toast-notifications';

class Register extends React.Component {
  render() {
    return (
      <div className={style.register}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
          }}
          validationSchema={yup.object().shape({
            firstName: yup.string()
                .required(this.props.translate('form_field_required'))
                .min(2, `${this.props.translate('form_field_min_length')} 2`),
            lastName: yup.string()
                .required('Required')
                .min(2, `${this.props.translate('form_field_min_length')} 2`),
            email: yup.string()
                .required(this.props.translate('form_field_required'))
                .email(this.props.translate('form_field_invalid_email')),
            password: yup.string()
                .required(this.props.translate('form_field_required'))
                .min(6, `${this.props.translate('form_field_min_length')} 6`),
            repeatPassword: yup.string()
                .required(this.props.translate('form_field_required'))
                .min(6, `${this.props.translate('form_field_min_length')} 6`)
                .oneOf([yup.ref('password'), null], this.props.translate('form_field_password_mismatch')),
          })}
          onSubmit={async (values) => {
            this.props.toastManager.add('hehe', { appearance: 'success'});
            try {
              registerUser(values);
            } catch (e) {
              console.log(e);
            }
          }}>
          {({values, errors, touched, handleBlur, handleChange}) => (
            <Form>
              <Field
                component={TextField}
                type="text"
                id="firstName"
                name="firstName"
                margin="dense"
                label={this.props.translate('register_first_name')}
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.firstName && touched.firstName}
                helperText={(errors.firstName && touched.firstName) && errors.firstName}
                variant="outlined"
                fullWidth
              />
              <Field
                component={TextField}
                type="text"
                id="lastName"
                name="lastName"
                margin="dense"
                label={this.props.translate('register_last_name')}
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.lastName && touched.lastName}
                helperText={(errors.lastName && touched.lastName) && errors.lastName}
                variant="outlined"
                fullWidth
              />
              <Field
                component={TextField}
                type="email"
                id="email"
                name="email"
                margin="dense"
                label={this.props.translate('register_email')}
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
                label={this.props.translate('register_password')}
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.password && touched.password}
                helperText={(errors.password && touched.password) && errors.password}
                variant="outlined"
                fullWidth
              />
              <Field
                component={TextField}
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                margin="dense"
                label={this.props.translate('register_repeat_password')}
                value={values.repeatPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.repeatPassword && touched.repeatPassword}
                helperText={(errors.repeatPassword && touched.repeatPassword) && errors.repeatPassword}
                variant="outlined"
                fullWidth
              />
              <Button color="primary"
                className={style.registerBtn}
                variant="contained"
                size="large"
                type="submit"
                fullWidth>
                {this.props.translate('register_register')}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withToastManager(withTranslations(Register));
