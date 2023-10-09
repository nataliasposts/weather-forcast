import axios from 'axios';

export const API_KEY = '1c99c168e5f32cae7dc01015c0038525';

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
});
