import constants from '../constants';

const { APP } = constants;

export function changeLanguage({ lang }) {
  return {
    type: APP.CHANGE_LANGUAGE,
    lang,
  };
}
