import { jsdom } from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

window.localStorage = window.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
};

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

chai.use(chaiImmutable);
