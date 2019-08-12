import {GET_TRANSLATIONS} from './actions';

const initialState = {
  translations: {
    form_field_first_name: 'First name',
    form_field_last_name: 'Last name',
    form_field_email: 'Email',
    form_field_password: 'Password',
    form_field_repeat_password: 'Repeat password',
    form_field_required: 'Field is required',
    form_field_min_length: 'Minimal length is',
    form_field_password_mismatch: 'Passwords do not match',
    form_field_invalid_email: 'Invalid email',
    login_login_btn: 'Login',
    login_register_btn: 'Register',
    register_register_btn: 'Register',
  },
};

export default function(state = initialState, action) {
  switch (action) {
    case GET_TRANSLATIONS:
      return state;
    default:
      return state;
  }
}
