import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './register.module.scss';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

//TODO: Replace hardcoded translations
const validationSchema = yup.object().shape({
  firstName: yup.string()
    .required('Required')
    .min(2, 'Min 2'),
  lastName: yup.string()
    .required('Required')
    .min(2, 'Min 2'),
  email: yup.string()
    .email()
    .required('Required'),
  password: yup.string()
    .required('Required')
    .min(6, 'Min 6'),
  repeatPassword: yup.string()
    .required('Required')
    .min(6, 'Min 6')
    .oneOf([yup.ref('password'), null], "Passwords must match")
});

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
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
          }}>
          {({values, errors, touched, handleBlur, handleChange}) => (
            <Form>
              <Field
                component={TextField}
                type="text"
                id="firstName"
                name="firstName"
                margin="dense"
                label="translation.first_name"
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
                label="translation.last_name"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.lastName && touched.lastName}
                helperText={(errors.firstName && touched.firstName) && errors.firstName}
                variant="outlined"
                fullWidth
              />
              <Field
                component={TextField}
                type="email"
                id="email"
                name="email"
                margin="dense"
                label="translation.email"
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
                label="translation.password"
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
                label="translation.repeat_password"
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
                translation.register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default Register;
