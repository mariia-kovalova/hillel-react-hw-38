import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const { data } = await axios.get('/users');

  return data;
};
