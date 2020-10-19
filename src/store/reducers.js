import {
  GET_TRANSLATIONS,
  CHECK_AUTH,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTHENTICATE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './actions';

const guestProfile = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
};

const defaultState = {
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
    sidebar_logout_btn: 'Logout',
    tasks_save_btn: 'Save',
    tasks_discard_btn: 'Discard',
  },
  user: {
    authenticated: false,
    authInProgress: false,
    credentialsChecked: false,
    profile: guestProfile,
  },
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_TRANSLATIONS:
      return state.translations;
    case CHECK_AUTH:
    case AUTHENTICATE:
    case LOGOUT:
      return {
        ...state,
        user: {
          ...state.user,
          authInProgress: true,
        },
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: {
          credentialsChecked: true,
          authenticated: true,
          authInProgress: false,
          profile: action.profile,
        },
      };
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: {
          credentialsChecked: true,
          authenticated: false,
          authInProgress: false,
          profile: guestProfile,
        },
      }
    case LOGOUT_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          authInProgress: false,
        },
      };
    default:
      return state;
  }
}
