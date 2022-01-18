/* eslint-disable no-console */
import axios from 'axios';

export default async function fetchData(config) {
  console.log(config);
  return axios(config);
}
