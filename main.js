var elWrapper = document.querySelector(".js-wrapper");
var searchInput = document.querySelector(".search-input");
var elForm = document.querySelector(".js-box");

for (var pokemon of pokemons) {
  var newItem = document.createElement("div");
  var newNum = document.createElement("p");
  var newImg = document.createElement("img");
  var newTitle = document.createElement("h3");
  var newEggs = document.createElement("p");
  var newHeight = document.createElement("p");
  var newWeight = document.createElement("p");
  var newWeakness = document.createElement("p");

  newNum.textContent = pokemon.num;
  newImg.src = pokemon.img;
  newTitle.textContent = pokemon.name;
  newEggs.textContent = `Egg: ${pokemon.egg}`;
  newHeight.textContent = `Height: ${pokemon.height}`;
  newWeight.textContent = `Weight: ${pokemon.weight}`;
  newWeakness.textContent = `Weaknesses: ${pokemon.weaknesses.join(", ")}`;

  newItem.classList.add("card");
  newNum.classList.add("pokemon-num");

  newItem.append(newNum, newImg, newTitle, newEggs, newHeight, newWeight, newWeakness);

  for (var type of pokemon.type) {
    var typeBtn = document.createElement("button");
    typeBtn.textContent = type;
    typeBtn.classList.add("type-btn", type.toLowerCase());
    newItem.appendChild(typeBtn);
  }

  elWrapper.appendChild(newItem);
}


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var searchValue = searchInput.value.trim().toLowerCase();
  elWrapper.innerHTML = ""; 

  for (var pokemon of pokemons) {
    if (pokemon.name.toLowerCase().includes(searchValue)) {
      var newItem = document.createElement("div");
      var newNum = document.createElement("p");
      var newImg = document.createElement("img");
      var newTitle = document.createElement("h3");
      var newEggs = document.createElement("p");
      var newHeight = document.createElement("p");
      var newWeight = document.createElement("p");
      var newWeakness = document.createElement("p");

      newNum.textContent = pokemon.num;
      newImg.src = pokemon.img;
      newTitle.textContent = pokemon.name;
      newEggs.textContent = `Egg: ${pokemon.egg}`;
      newHeight.textContent = `Height: ${pokemon.height}`;
      newWeight.textContent = `Weight: ${pokemon.weight}`;
      newWeakness.textContent = `Weaknesses: ${pokemon.weaknesses.join(", ")}`;

      newItem.classList.add("card");
      newNum.classList.add("pokemon-num");

      newItem.append(newNum, newImg, newTitle, newEggs, newHeight, newWeight, newWeakness);

      for (var type of pokemon.type) {
        var typeBtn = document.createElement("button");
        typeBtn.textContent = type;
        typeBtn.classList.add("type-btn", type.toLowerCase());
        newItem.appendChild(typeBtn);
      }

      elWrapper.appendChild(newItem);
    }
  }
});
