import allApts from "./aptsData.js";
import "./mainMenu.js"

const gridCells = document.querySelectorAll(".cell");

// Function for building info sheet for single apartment's card
function showAptInfo(singleApt, index) {
  const createArticle = (singleApt) => {
    let newArticle = document.createElement("article");
    //combining apartment address
    const aptAddress = `
      ${singleApt.address.street} 
      ${singleApt.address.strType} 
      ${singleApt.address.houseNumber}
      `;
    //creating article's content
      const content = `
        <div class="subheading">${singleApt.name}</div>
        <div class="general_text">Address: ${aptAddress}</div>
        <img src="${singleApt.featImg}" height="120px">
        `;    
    newArticle.innerHTML = content;
    return newArticle;
  };
 
  document.querySelector(`.cell${index}`).append(createArticle(singleApt));
};

// Function for creating apartment "cards" - this is the main function
function createCells(allApts) {
  allApts.forEach((currentApt, index) => {
    showAptInfo(currentApt, index)
  })
  // Creating event listeners for every card
  gridCells.forEach((cell, index) => {
    cell.addEventListener("click", (e) => {
      window.location.href = "./single_apt_template.html?" + index;
      })
  })
};

createCells(allApts);