import allApts from "./aptsData.js";

// Creates the apartments list sub-menu
function aptsSubMenu() {
  
  var aptsMenu="";
  allApts.forEach((currentApt, index) => {
    if (aptNum) {
      var navItem = (aptNum==index ? "" : `<li class="aptsMenu_text">
      <a class="aptsMenu_text aptsMenu link__remove_underline fade" 
          href = "./single_apt_template.html?${index}">
      ${currentApt.name}
      </a>
    </li>`);
  } else {
    // console.log("aptNum does not exist");
    var navItem = `<li class="aptsMenu_text">
    <a class="aptsMenu_text aptsMenu link__remove_underline fade" 
        href = "./single_apt_template.html?${index}">
        ${currentApt.name}
    </a>
  </li>`;
  };
  aptsMenu += navItem;
  });
  return aptsMenu;
}

// Creates main header (all pages)
function createHeader(pageTitle) {
  const headerContainer = document.querySelector("header");  
  // console.log(aptsMenu);
  let headerContent = `
  <h1 class="title">${pageTitle}</h1>
  <nav class="nav__container">
    <ul class="nav__text">
      
      <li>
        <a class="nav__text nav__item link__remove_underline" href="./index.html">
        Home
        </a>
      </li>
      
      <li class="nav__item aptsMenu">
        Apartments
        <ul class="aptsMenu_container">${aptsSubMenu()}</ul>
      </li>
      
      <li class="nav__item">
        <a class="nav__text nav__item link__remove_underline" href="./contactus.html">
        Contact us
        </a>
      </li>
    
    </ul>
  </nav>
  `;
  headerContainer.innerHTML = headerContent;

  return(headerContainer);
}

var queryString = decodeURIComponent(window.location.search);
var aptNum = queryString.substring(1);
// aptNum ? console.log(aptNum) : console.log("no aptNum");

createHeader(document.querySelector("title").innerText);