import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

const weatherService = {
  getWeather: async (lat, lon) => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: 'metric',
          lang: 'en',
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  },
};

export default weatherService;
