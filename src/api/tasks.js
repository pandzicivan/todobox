import * as http from 'axios';

const baseUrl = process.env.REACT_APP_TODOER_BASE_URL;

export function tasks() {
  return http({
    url: `${baseUrl}/tasks?date=2020-11-06`,
    method: 'GET',
    withCredentials: true,
  }).then((response) => {
    return response.data;
  });
}

export function create(data) {
  return http({
    url: `${baseUrl}/tasks`,
    method: 'POST',
    withCredentials: true,
    data,
  }).then((response) => {
    return response.data;
  });
}
