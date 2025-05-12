import axios from '../axios';
// import e from 'cors';

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post('/api/login' , {email: userEmail, password: userPassword});
};

export { handleLoginApi };