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
      data: [],
      isFetching: false,
    }));
  });

  it('handles FETCH_INFO_REQUEST', () => {
    const state = fromJS({
      data: [],
      isFetching: false,
    });

    const action = {
      type: INFO.FETCH_INFO_REQUEST,
    };
    const nextState = info(state, action);

    expect(nextState).to.equal(fromJS({
      data: [],
      isFetching: true,
    }));
  });

  it('handles FETCH_INFO_SUCCESS', () => {
    const state = fromJS({
      data: [],
      isFetching: true,
    });
    const action = {
      type: INFO.FETCH_INFO_SUCCESS,
      response: {
        data: [{ id: 1, text: 'hello' }, { id: 2, text: 'good' }, { id: 3, text: 'nice' }]
      }
    };
    const nextState = info(state, action);

    expect(nextState).to.equal(fromJS({
      data: [{ id: 1, text: 'hello' }, { id: 2, text: 'good' }, { id: 3, text: 'nice' }],
      isFetching: false,
    }));
  });

  it('handles FETCH_INFO_FAIL', () => {
    const state = fromJS({
      data: [],
      isFetching: true,
    });
    const action = {
      type: INFO.FETCH_INFO_FAIL,
    };
    const nextState = info(state, action);

    expect(nextState).to.equal(fromJS({
      data: [],
      isFetching: false,
    }));
  });

  it('can be used with reduce', () => {
    const actions = [
      { type: INFO.FETCH_INFO_REQUEST },
      {
        type: INFO.FETCH_INFO_SUCCESS,
        response: {
          data: [{ id: 1, text: 'hello' }, { id: 2, text: 'good' }, { id: 3, text: 'nice' }]
        }
      }
    ];

    const finalState = actions.reduce(info, fromJS({
      data: [],
      isFetching: false,
    }));

    expect(finalState).to.equal(fromJS({
      data: [{ id: 1, text: 'hello' }, { id: 2, text: 'good' }, { id: 3, text: 'nice' }],
      isFetching: false
    }));
  });

});
