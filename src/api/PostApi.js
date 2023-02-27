
import axios from 'axios';
import * as CONSTANTS from '../configs/constants';
// const baseUrl = CONSTANTS.BASE_URL + '/api';
const baseUrl = CONSTANTS.LOCAL_API + '/api';

export const getAllPost = () => {
  const url = baseUrl + "/post";
  console.log('path: ', url);
  return axios.get(url);
}
