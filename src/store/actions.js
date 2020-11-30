import {store} from './store';
import {loginCheck, loginUser, logoutUser} from '../api/user';
import {
  tasks,
  create,
  edit,
} from '../api/tasks';

export const GET_TRANSLATIONS = 'GET_TRANSLATIONS';
export const CHECK_AUTH = 'CHECK_AUTH';
export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const GET_TASKS = 'GET_TASKS';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_ERROR = 'GET_TASKS_ERROR';
export const CREATE_TASK = 'CREATE_TASK';
export const CREATE_TASK_ERROR = 'CREATE_TASK_ERROR';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const EDIT_TASK = 'EDIT_TASK';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_ERROR = 'EDIT_TASK_ERROR';

export function getTranslations() {
  return {
    type: GET_TRANSLATIONS,
  };
}

export function checkAuth() {
  return async (dispatch) => {
    dispatch({
      type: CHECK_AUTH,
    });

    const user = await loginCheck();
    if (user) {
      dispatch({
        type: AUTH_SUCCESS,
        profile: user,
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
}

export function authenticate(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
    });

    try {
      const user = await loginUser(data);
      dispatch({
        type: AUTH_SUCCESS,
        profile: user,
      });
    } catch(e) {
      dispatch({
        type: AUTH_ERROR,
      });
      throw e;
    }
  }
}

export function logout() {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT,
    });

    try {
      await logoutUser();
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } catch(e) {
      dispatch({
        type: LOGOUT_ERROR,
      });
      throw e;
    }
  }
}

export function getTasks() {
  return async (dispatch) => {
    dispatch({
      type: GET_TASKS,
    });

    try {
      const userTasks = await tasks();
      dispatch({
        type: GET_TASKS_SUCCESS,
        tasks: userTasks,
      });
    } catch(e) {
      dispatch({
        type: GET_TASKS_ERROR,
      });
    }
  }
}

export function createTask(data) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_TASK,
      data,
    })

    try {
      const task = await create(data);
      dispatch({
        type: CREATE_TASK_SUCCESS,
        data: task,
      });
    } catch (e) {
      dispatch({
        type: CREATE_TASK_ERROR,
      });
    }
  }
}

export function editTask(data) {
  return async (dispatch) => {
    const task = await edit({
      id: data.id,
      description: data.description,
      date: "2020-11-06",
      alarm: "2020-11-06",
      archived: data.done,
    });
    
    dispatch({
      type: EDIT_TASK_SUCCESS,
      data: task,
    })
  }
}

export function toggleTaskStatus(id) {
  const task = store.getState().tasks.data.find((el) => {
    return el.id === id;
  });
  const updatedTask = {...task, done: !task.archived};
  return editTask(updatedTask);
}
