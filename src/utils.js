const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData();
