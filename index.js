// // Getting data from the server
function fetchCharacter() {
  return fetch("http://localhost:3000/characters")
    .then((res) => res.json())
    .then((data) => getCharacters(data));
}

fetchCharacter();

// Function for getting the characters from the array
function getCharacters(names) {
  const ol = document.querySelector("ol");

  for (const element of names) {
    const li = document.createElement("li");
    li.textContent = element.name;
    li.addEventListener("click", () => fetchAnimals(element.id));
    ol.appendChild(li);
  }
}

// Function for getting the character by id
function fetchAnimals(charactersId) {
  fetch(`http://localhost:3000/characters/${charactersId}`)
    .then((response) => response.json())
    .then((data) => displayAnimals(data));
}

function displayAnimals(item) {
  // Removing an existing animal once the user clicks on another animal
  const existingAnimalCard = document.querySelector(".cardContent");
  if (existingAnimalCard) {
    existingAnimalCard.remove();
  }

  // Creating the card content of the animal
  const actualAnimal = document.createElement("div");
  actualAnimal.innerHTML = `
    <div class="cardContent">
      <img src="${item.image}" alt="${item.name}">
      <p>Name: ${item.name}</p>
      <p class="vote">Votes: ${item.votes}</p>
      <button class="btn">Vote</button>
    </div>
  `;

  let voteCount = item.votes; // Initialize voteCount with the current votes

  actualAnimal.querySelector(".btn").addEventListener("click", function () {
    // Increment vote count when the button is clicked
    voteCount++;
    actualAnimal.querySelector(".vote").innerText = `Votes: ${voteCount}`;
  });

  document.body.appendChild(actualAnimal);
}
