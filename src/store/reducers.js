import {GET_TRANSLATIONS} from './actions';

const initialState = {
  translations: {
    register_first_name: 'First name',
    register_last_name: 'Last name',
    register_email: 'Email',
    register_password: 'Password',
    register_repeat_password: 'Repeat password',
    register_register: 'Register',
    form_field_required: 'Field is required',
    form_field_min_length: 'Minimal length is',
    form_field_password_mismatch: 'Passwords do not match',
    form_field_invalid_email: 'Invalid email',
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
