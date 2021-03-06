import { getData, createGame } from './utils.js';

const refreshBtn = document.querySelector('#refresh');

const leaderboard = document.querySelector('.leaderboard-list');

const load = async () => {
  const results = await getData();

  results.result.forEach((result) => {
    leaderboard.innerHTML += `<li class="my-2 font-semibold rounded my-4 p-3 shadow border-teal-400 border-l-4">
        ${result.user}: ${result.score}
      </li>`;
  });
};

// Loading leaderboard data
load();

// Refresh data upon clicking of refresh button
refreshBtn.addEventListener('click', async () => {
  window.location.reload();
});

// Create new leader
const form = document.getElementById('leaderborad-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;

  await createGame(name, score);
  form.reset();
  leaderboard.innerHTML += `<li class="my-2 font-semibold rounded my-4 p-3 shadow border-teal-400 border-l-4">
    ${name}: ${score}
  </li>`;
});
