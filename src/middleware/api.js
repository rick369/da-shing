import fetch from 'isomorphic-fetch';

export const CALL_API = Symbol('CALL_API');

const api = store => next => action => {
  if (!action[CALL_API]) {
    return next(action);
  }
  const { getState } = store;
  const {
    method,
    body,
    url,
    requestType,
    successType,
    failType,
    afterSuccess,
  } = action[CALL_API];

  next({
    type: requestType,
  });

  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method,
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      if (json.status < 200 || json.status >= 300) {
        next({
          type: failType,
          response: json,
        });
        reject();
        return;
      }
      if (afterSuccess) {
        afterSuccess({ getState });
      }
      next({
        type: successType,
        response: json,
      });
      resolve();
    });
  });

  return promise;
};

export default api;
