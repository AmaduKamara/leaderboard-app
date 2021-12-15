import axios from 'axios';

const baseUrl =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

export async function createGame(user, score) {
  const requestBody = {
    user,
    score,
  };
  await axios.post(`${baseUrl}5H3ZhzHBptAjLZzd7hXU/scores`, requestBody);
}

export async function getData() {
  const response = await axios.get(`${baseUrl}5H3ZhzHBptAjLZzd7hXU/scores`);
  const data = response.data;
  return data;
}

export default {
  createGame,
  getData,
};
