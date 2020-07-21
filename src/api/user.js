import * as http from 'axios';

const baseUrl = process.env.REACT_APP_TODOER_BASE_URL;

export async function registerUser(data) {
  return http({
    url: `${baseUrl}/users/register`,
    method: 'POST',
    data: data,
  });
}

export function loginUser(data) {
  return http({
    url: `${baseUrl}/users/login`,
    method: 'POST',
    data: data,
    withCredentials: true,
  });
}

export async function loginCheck() {
  try {
    const response = await http({
      url: `${baseUrl}/users/login`,
      method: 'GET',
      withCredentials: true,
    });
    return response;
  } catch (err) {
    return false;
  }
}


export async function logoutUser() {
  return http({
    url: `${baseUrl}/users/logout`,
    method: 'GET',
    withCredentials: true,
  });
}
