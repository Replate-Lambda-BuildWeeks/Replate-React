import axios from 'axios';

// "creates" a new "instance" of the axios object
// - baseURL
// - headers object -> authorization header with the token

window.axios = axios;
export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://0d43ca75.ngrok.io/api',
    headers: {
      authorization: token
    }
  });
};
