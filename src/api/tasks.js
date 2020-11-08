import * as http from 'axios';

const baseUrl = process.env.REACT_APP_TODOER_BASE_URL;

export function tasks() {
  return http({
    url: `${baseUrl}/tasks?date="2020-11-06"`,
    method: 'GET',
    withCredentials: true,
  });
}
