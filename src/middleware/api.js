import fetch from 'isomorphic-fetch';

export const CALL_API = Symbol('CALL_API');

const api = store => next => action => {
  if (!action[CALL_API]) {
    return next(action);
  }
  const { getState } = store;

  const user = getState().user.toJS();

  const {
    method,
    body,
    url,
    requestType,
    successType,
    failType,
    afterSuccess,
    payload = {},
  } = action[CALL_API];

  next({
    type: requestType,
    payload,
  });

  const promise = new Promise((resolve) => {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // if logged in, includes the authorization header
    if (user.isLoggedIn) {
      headers.Authorization = `Bearer ${user.token}`;
    }

    fetch(url, {
      method,
      body: JSON.stringify(body),
      headers,
    })
    .then((response) => {
      response.json().then((json) => {
        if (!response.ok) {
          if (afterSuccess) {
            afterSuccess(json, {
              getState,
            });
          }
          next({
            type: failType,
            response: json,
            payload,
          });
          resolve();
          return;
        }
        if (afterSuccess) {
          afterSuccess(null, {
            getState,
            response: json,
          });
        }
        next({
          type: successType,
          response: json,
          payload,
        });
        resolve();
      });
    });
  });

  return promise;
};

export default api;
