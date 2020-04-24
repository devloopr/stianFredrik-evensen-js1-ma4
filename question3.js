const gamesUrl = "https://api.rawg.io/api/games/4200";

async function fetchGameDetails() {
  try {
    const fetchDetails = await fetch(gamesUrl);
    const detailsResponse = await fetchDetails.json();
    console.log("detailsResponse", detailsResponse);

    createGameDetails(detailsResponse);
  } catch (error) {
    heading.innerHTML = "An error occured";
    console.log(error);
  }
}

fetchGameDetails();

function createGameDetails(detailsResponse) {
  const heading = document.querySelector("h1");
  heading.innerHTML = "Name of game: " + detailsResponse.name;

  const image = document.querySelector(".image");
  image.style.backgroundImage = `url(${detailsResponse.background_image})`;

  const description = document.querySelector(".description");
  description.innerHTML = "Description: " + detailsResponse.description;
}

createGameDetails();
