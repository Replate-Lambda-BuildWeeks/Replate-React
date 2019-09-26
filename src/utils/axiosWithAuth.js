import axios from 'axios';

// Build a module that "creates" a new "instance" of the axios object
// - baseURL
// - headers object -> authorization header with the token

window.axios = axios;
export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://0bbfee1e.ngrok.io',
    headers: {
      authorization: token
    }
  });
};
