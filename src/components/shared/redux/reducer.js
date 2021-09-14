import {
  ADD_MENU, FAIL, RECEIVE, REMOVE_MENU, REQUEST,
} from './actions';

const initialState = {};

function receipts(state = initialState, action) {
  switch (action.type) {
    case ADD_MENU: return { ...state, [action.payload.id]: action.payload };

    case REMOVE_MENU: {
      const { [action.id]: deleted, ...rest } = state;
      return rest;
    }

    case REQUEST: return { ...state, loading: true };

    case RECEIVE: {
      const newState = {};
      action.payload.forEach((data) => { newState[data.id] = data; });
      return newState;
    }

    case FAIL: return state;
    // case 'FAIL': return { ...state, error: action.payload};

    default: return state;
  }
}

exports = [
  receipts,
];
