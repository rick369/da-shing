import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import constants from '../../src/constants';
const { INFO } = constants;

import info from '../../src/reducers/info';

describe("info Reducer", () => {
  it('has an initial state', () => {
    const action = {};
    const nextState = info(undefined, action);
    expect(nextState).to.equal(fromJS({
      isloaded: false,
      isFetching: false,
      items: [],
      errorMessage: '',
    }));
  });

  it('handles FETCH_INFO_REQUEST', () => {
    const state = fromJS({
      items: [],
      isFetching: false,
    });

    const action = {
      type: INFO.FETCH_INFO_REQUEST,
    };
    const nextState = info(state, action);

    expect(nextState).to.equal(fromJS({
      items: [],
      isFetching: true,
    }));
  });

  it('handles FETCH_INFO_SUCCESS', () => {
    const state = fromJS({
      isloaded: false,
      isFetching: true,
      items: [],
    });
    const action = {
      type: INFO.FETCH_INFO_SUCCESS,
      response: {
        items: [{ id: 1, text: 'hello' }, { id: 2, text: 'good' }, { id: 3, text: 'nice' }]
      }
    };
    const nextState = info(state, action);

    expect(nextState).to.equal(fromJS({
      isloaded: true,
      isFetching: false,
      items: [{ id: 1, text: 'hello' }, { id: 2, text: 'good' }, { id: 3, text: 'nice' }],
      errorMessage: '',
    }));
  });

  it('handles FETCH_INFO_FAIL', () => {
    const state = fromJS({
      isloaded: false,
      isFetching: true,
      items: [],
      errorMessage: '',
    });
    const action = {
      type: INFO.FETCH_INFO_FAIL,
      response: {
        error: {
          message: 'Unauthorized'
        },
      },
    };
    const nextState = info(state, action);

    expect(nextState).to.equal(fromJS({
      isloaded: false,
      isFetching: false,
      items: [],
      errorMessage: 'Unauthorized',
    }));
  });

  it('can be used with reduce', () => {
    const actions = [
      { type: INFO.FETCH_INFO_REQUEST },
      {
        type: INFO.FETCH_INFO_SUCCESS,
        response: {
          items: [{ id: 1, text: 'hello' }, { id: 2, text: 'good' }, { id: 3, text: 'nice' }]
        }
      }
    ];

    const finalState = actions.reduce(info, fromJS({
      isloaded: false,
      isFetching: false,
      items: [],
      errorMessage: '',
    }));

    expect(finalState).to.equal(fromJS({
      isloaded: true,
      isFetching: false,
      items: [{ id: 1, text: 'hello' }, { id: 2, text: 'good' }, { id: 3, text: 'nice' }],
      errorMessage: '',
    }));
  });

});
