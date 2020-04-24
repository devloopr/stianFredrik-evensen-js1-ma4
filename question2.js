const gamesUrl = "https://api.rawg.io/api/games";

async function fetchGames() {
  try {
    const fetchGames = await fetch(gamesUrl);
    const response = await fetchGames.json();
    const gameResults = response.results;
    createGames(gameResults);
  } catch (error) {
    console.log(error);
  }
}

fetchGames();

function createGames(gameResults) {
  console.log(gameResults);

  const gameContainer = document.querySelector(".results");

  let html = "";

  for (let i = 0; i < gameResults.length; i++) {
    html += ` 
          <div class="game">
            <h2>${gameResults[i].name}</h2>
            <img src=${gameResults[i].background_image} alt=${gameResults[i].name} />
          </div>
    `;
  }

  gameContainer.innerHTML = html;
}
