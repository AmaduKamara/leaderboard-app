import axios from 'axios';

const baseUrl = '';

export const createGame = async (user, score) => {
  const requestBody = {
    user,
    score,
  };
  await axios.post(`${baseUrl}Ra6sv7sHmndIiLZ3k9Wu/scores`, requestBody);
};

export const getData = async () => {
  const response = await axios.get(`${baseUrl}Ra6sv7sHmndIiLZ3k9Wu/scores`);
  return response.data;
};
