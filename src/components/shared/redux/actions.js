import axios from 'axios';
import { SERVER_URL } from '../constants';

export const ADD_MENU = 'ADD_MENU';
export const REQUEST = 'REQUEST_RECEIPTS';
export const RECEIVE = 'RECEIVE_RECEIPTS';
export const FAIL = 'FAIL_GETTING_RECEIPTS';
export const REMOVE_MENU = 'REMOVE_MENU';

export function addMenu(id) {
  return { type: ADD_MENU, id };
}

export function removeMenu(id) { return { type: REMOVE_MENU, id }; }

export function requestReceipts() { return { type: REQUEST }; }

export function receiveReceipts() { return { type: RECEIVE }; }

export function failGettingReceipts() { return { type: FAIL }; }

export async function getReceipts(id) {
  return (dispatch) => {
    dispatch(requestReceipts);

    return axios.get(`${SERVER_URL}rec/id/${id}`)
      .then(
        (res) => dispatch(receiveReceipts(res)),
        (err) => dispatch(failGettingReceipts(err)),
      );
  };
}

export async function addReceipts(id) {
  return (dispatch) => {
    dispatch(requestReceipts);

    return axios.get(SERVER_URL + id)
      .then(
        (res) => dispatch(receiveReceipts(res)),
        (err) => dispatch(failGettingReceipts(err)),
      );
  };
}
