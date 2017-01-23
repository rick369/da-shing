import constants from '../constants';

const { APP } = constants;

export function changeLanguage({ lang }) {
  return {
    type: APP.CHANGE_LANGUAGE,
    lang,
  };
}

export function openModal({ title, body, isNotHasHeader, isNotHasFooter }) {
  return {
    type: APP.OPEN_MODAL,
    title,
    body,
    isNotHasHeader,
    isNotHasFooter,
  };
}

export function closeModal() {
  return {
    type: APP.CLOSE_MODAL,
  };
}
