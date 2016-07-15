import {
  INIT_I18N,
} from '../constants';

export const initI18N = (t) => {
  const action = {
    type: INIT_I18N,
    t,
  };
  return action;
};
