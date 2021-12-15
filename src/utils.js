import axios from 'axios';

const baseUrl =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

export async function createGame(name, score) {
  const requestBody = {
    name,
    score,
  };
  await axios
    .post(baseUrl, requestBody)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      log.error(error.response.data);
    });
}

export async function getData() {
  const response = await axios.get(`${baseUrl}eb27NxxL0PueqKSqpULU/scores`);
  const data = response.data;
  return data;
}

export default {
  createGame,
  getData,
};
