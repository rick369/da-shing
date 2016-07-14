import {
  UPDATE_USER,
  INIT_USER,
} from '../constants';

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    name: user.name,
  };
}

export function initUser() {
  return {
    type: INIT_USER,
  };
}
