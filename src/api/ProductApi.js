import axios from 'axios';
import * as CONSTANTS from '../configs/constants';
const baseUrl = CONSTANTS.BASE_URL + '/api';

export const getAllProduct = () => {
  const url = baseUrl + '/product';
  // console.log('url get all', url);
  return axios.get(url);
}

export const getProductDetailById = (id) => {
  const url = baseUrl + '/product/' + id;
  // console.log('url detail', url);
  return axios.get(url);
}