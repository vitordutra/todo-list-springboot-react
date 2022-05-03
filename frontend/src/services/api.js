import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  //baseURL: 'https://desolate-plains-22853.herokuapp.com/api/v1',
});

export default api;
