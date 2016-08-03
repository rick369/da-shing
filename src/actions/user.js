import fetch from 'isomorphic-fetch';

import constants from '../constants';

import config from '../../config';

const { USER } = constants;

export function loginSuccess(user, token) {
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

export function formLogin(email, password) {
  const url = `http://${config.apiHost}:${config.apiPort}/users/login`;
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
    .then((response) => response.json())
    .then((response) => {
      const { authenticated, error } = response;

      if (!authenticated) {
        reject(error);
        return;
      }

      resolve(response);
    })
    .catch(error => {
      reject(error);
    });
  });
  return promise;
}
