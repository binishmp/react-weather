import axios from 'axios';
import { API_ENDPOINT } from './apiKey';

export default axios.create({
  baseURL: API_ENDPOINT
});