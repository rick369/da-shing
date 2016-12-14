import fetch from 'isomorphic-fetch';

import constants from '../constants';

import { API_HOST, API_PORT } from '../../config';

const { USER } = constants;

export function loginSuccess({ user, token }) {
  return {
    type: USER.LOGIN_SUCCESS,
    user,
    token,
  };
}

export function logout() {
  return {
    type: USER.LOGOUT,
  };
}

export function formLogin({ email, password }) {
  const url = `http://${API_HOST}:${API_PORT}/users/login`;
  const body = JSON.stringify({
    email,
    password,
  });

  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      response
        .json()
        .then((json) => {
          const { authenticated, error } = json;

          if (!response.ok) {
            reject(error);
          }

          if (!authenticated) {
            reject(error);
            return;
          }

          resolve(json);
        });
    });
  });
  return promise;
}
