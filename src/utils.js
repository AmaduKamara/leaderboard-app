import axios from 'axios';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

export const createGame = async (user, score) => {
  const requestBody = {
    user,
    score,
  };
  await axios.post(`${baseUrl}M1KEeRFwRke7lKfU6WKP/scores`, requestBody);
};

export const getData = async () => {
  const response = await axios.get(`${baseUrl}M1KEeRFwRke7lKfU6WKP/scores`);
  return response.data;
};
