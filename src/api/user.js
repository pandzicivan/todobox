import * as http from 'axios';

const baseUrl = process.env.REACT_APP_TODOER_BASE_URL;

export async function registerUser(data) {
  return http({
    url: `${baseUrl}/users/register`,
    method: 'POST',
    data: data,
  });
}

export async function loginUser(data) {
  return http({
    url: `${baseUrl}/users/login`,
    method: 'POST',
    data: data,
  });
}

export async function loginCheck() {
  try {
    const response = await http({
      url: `${baseUrl}/users/login`,
      method: 'GET',
    });
    return response;
  } catch (err) {
    return false;
  }
}
