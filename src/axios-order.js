import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-40c93.firebaseio.com/'
});

export default instance;