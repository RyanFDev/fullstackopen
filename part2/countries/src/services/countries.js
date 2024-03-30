import axios from 'axios';

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries';

const countriesService = {
  getAll: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/all`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch countries');
    }
  },

  searchByName: async (name) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/name/${name}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to search for country by name');
    }
  },
};

export default countriesService;
