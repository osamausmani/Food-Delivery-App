import {api, getFoods} from '../constants/api';
import axios from 'axios';

export const fetchFoods = async () => {
  const options = {
    method: 'GET',
    url: api.getFoods,
    params: {
      from: '0',
      size: '20',
      tags: 'under_30_minutes',
    },
    headers: {
      'X-RapidAPI-Key': 'd7e4ac4615msh9b5ce2435c84a49p145314jsn6cb9f92c381b',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log('response');
    return response.data;
  } catch (error) {
    console.error(error);
    return null; // or throw error, depending on how you want to handle errors
  }
};
