import {
  GET_TRANSLATIONS,
  CHECK_AUTH,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTHENTICATE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  CREATE_TASK_SUCCESS,
  EDIT_TASK_SUCCESS,
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
    tasks_new: 'New task',
    tasks_description: 'Description',
    tasks_save_btn: 'Save',
    tasks_discard_btn: 'Discard',
    tasks_todo: 'ToDo',
    tasks_done: 'Done',
  },
  user: {
    authenticated: false,
    authInProgress: false,
    credentialsChecked: false,
    profile: guestProfile,
  },
  tasks: {
    getTasksReqInProgress: false,
    data: {},
  }
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
    case GET_TASKS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          getTasksReqInProgress: true,
        },
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          getTasksReqInProgress: false,
          data: action.tasks,
        },
      };
    case GET_TASKS_ERROR:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          getTasksReqInProgress: false,
        },
      };
    case CREATE_TASK_SUCCESS:
    case EDIT_TASK_SUCCESS:
      const tasks = state.tasks.data.map((task) => {
        return task.id !== action.data.id ? task : action.data;
      })
      return {
        ...state,
        tasks: {
          ...state.tasks,
          data: tasks,
        }
      };
    default:
      return state;
  }
}
