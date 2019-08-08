import * as http from 'axios';

export function registerUser(data) {
  return http({
    url: 'hhehe',
    method: 'POST',
    data: data,
  });
}
