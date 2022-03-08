import allApts from "./aptsData.js";

// Function for building info sheet for single apartment's "card"
function showAptInfo(singleApt) {
  //combining apartment address
  const aptAddress = `
    ${singleApt.address.street} 
    ${singleApt.address.strType} 
    ${singleApt.address.houseNumber}
    `;
  //creating card's inner content
    const content = `
      <div class="subheading">${singleApt.name}</div>
      <div class="general_text">Address: ${aptAddress}</div>
      <img src="${singleApt.featImg}" height="120px">
      `;    
return content;
};

// Function for creating apartment "cards" - this is the main function
function createCells(allApts) {
  const theGrid = document.querySelector(".grid");
  allApts.forEach((singleApt, index) => {
    let currCell = `<li class="cell cell${index}">${showAptInfo(singleApt, index)}</li>`;
    theGrid.innerHTML += currCell;
    })
};

// Creating event listener for each cell
function createCellListeners(gridCells){
    gridCells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      window.location.href = "./single_apt_template.html?" + index;
      })
  })
};
  
// create content in cards grid (homepage)
createCells(allApts);
createCellListeners(document.querySelectorAll(".cell"));