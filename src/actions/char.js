import constants from '../constants';

const { CHAR } = constants;

export function addCharMessageText({ text }) {
  return {
    type: CHAR.ADD_CHAR_MESSAGE_TEXT,
    text,
  };
}
