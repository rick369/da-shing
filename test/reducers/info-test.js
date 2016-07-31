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
      loaded: false,
      isFetching: false,
      items: [],
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
      loaded: false,
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
      loaded: true,
      isFetching: false,
      items: [{ id: 1, text: 'hello' }, { id: 2, text: 'good' }, { id: 3, text: 'nice' }],
    }));
  });

  it('handles FETCH_INFO_FAIL', () => {
    const state = fromJS({
      loaded: false,
      isFetching: true,
      items: [],
    });
    const action = {
      type: INFO.FETCH_INFO_FAIL,
    };
    const nextState = info(state, action);

    expect(nextState).to.equal(fromJS({
      loaded: false,
      isFetching: false,
      items: [],
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
      loaded: false,
      isFetching: false,
      items: [],
    }));

    expect(finalState).to.equal(fromJS({
      loaded: true,
      isFetching: false,
      items: [{ id: 1, text: 'hello' }, { id: 2, text: 'good' }, { id: 3, text: 'nice' }],
    }));
  });

});
