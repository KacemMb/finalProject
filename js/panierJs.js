let dataGettedFromLocalStorage = JSON.parse(localStorage.getItem("dataSaved"));
let allCardsGettedHTML = document.querySelector(".ultr");

// Use a Set to keep track of unique product IDs
let uniqueProductIds = new Set();

let uniqueCardsHTML = dataGettedFromLocalStorage
  .filter(item => {
    // Filter out duplicates based on product ID
    if (uniqueProductIds.has(item.id)) {
      return false; // Skip duplicates
    }
    uniqueProductIds.add(item.id); // Add the current product ID to the Set
    return true; // Include unique items
  })
  .map(item => {
    return `
        <div class="superContainer">
            <div>
                <img src="${item.img}" alt="" class="imgg">
            </div>
            <div class="info">
                <p class="name">Product: ${item.name}</p>
                <p class="name">Price: ${item.price}</p>
            </div>
            <div class="quantClass">
                <p>Quantity</p>
                <div id="quant">
                    <button class="quantBtn minesBtn">-</button>
                    <p class="count">1</p>
                    <button class="quantBtn plusBtn">+</button>
                </div>
            </div>
            <div id="delet">
                <p>Delete</p>
                <button id="deletBtn">X</button>
            </div>
        </div>
    `;
  });

allCardsGettedHTML.innerHTML = uniqueCardsHTML.join("");
let plusBtn = document.querySelectorAll(".plusBtn");
let minesBtn = document.querySelectorAll(".minesBtn");
let count = document.querySelectorAll(".count");
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    count[i].textContent++;
  });
}
for (let i = 0; i < minesBtn.length; i++) {
  minesBtn[i].addEventListener("click", function () {
    if (count[i].textContent>1){
      count[i].textContent--;
    }
  });
}

let deleteButtons = document.querySelectorAll(".deletBtn");

for (let i = 0; i < deleteButtons.length; i++) {
   deleteButtons[i].addEventListener("click", function () {
    // Remove the corresponding item from the local storage array
    dataGettedFromLocalStorage.splice(i, 1);

    // Update the local storage with the modified array
    localStorage.setItem("dataSaved", JSON.stringify(dataGettedFromLocalStorage));

    // Reload the page to reflect the changes
    location.reload();
  });
}
