import * as http from 'axios';

const baseUrl = process.env.REACT_APP_TODOER_BASE_URL;

export function registerUser(data) {
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
  });
}
