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
                <p class="name price">Price: ${item.price}</p>
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
                <button class="del" id="deletBtn">X</button>
            </div>
        </div>
    `;
  });

allCardsGettedHTML.innerHTML = uniqueCardsHTML.join("");

// plus and mines button function
let plusBtn = document.querySelectorAll(".plusBtn");
let minesBtn = document.querySelectorAll(".minesBtn");
let count = document.querySelectorAll(".count");
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    count[i].textContent++;
    totalPriceCalculating()
  });
}
for (let i = 0; i < minesBtn.length; i++) {
  minesBtn[i].addEventListener("click", function () {
    if (count[i].textContent>1){
      count[i].textContent--;
      totalPriceCalculating();
    }
  });
}


// delet button
let delBtn = document.querySelectorAll(".del");
for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener("click", function () {
    dataGettedFromLocalStorage.splice([i],1)
    let myobj = JSON.stringify(dataGettedFromLocalStorage);
    localStorage.setItem("dataSaved", myobj);
    location.reload();
    totalPriceCalculating();
  });
}


function totalPriceCalculating(){
  let totalPrice = document.getElementById("tPrice");
let price = document.querySelectorAll(".price"); // array
var finalPrice = 0;
// count 
for (let i = 0; i < price.length; i++) {
  finalPrice =  finalPrice + (extractNumberFromString(price[i].textContent) * extractNumberFromString(count[i].textContent));
}
finalPrice = finalPrice.toFixed(2)
 totalPrice.textContent = addDollarSign(finalPrice)
 
}



// Function to extract a number from a string with a dollar sign
function extractNumberFromString(str) {
  // Use regular expression to extract the number part
  const match = str.match(/\d+/);
  
  // Check if a match is found
  if (match) {
    // Convert the matched string to a number and return
    return parseInt(match[0], 10);
  } else {
    // Return an error value or handle it as needed
    return NaN;
  }
}


function addDollarSign(number) {
  // Check if the input is a valid number
  if (!isNaN(number)) {
    // Format the number with a dollar sign and return
    return `$${number}`;
  } else {
    // Return an error value or handle it as needed
    return 'Invalid input';
  }
}

totalPriceCalculating()