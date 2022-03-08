import allApts from "./aptsData.js";

function createSingleAptPage(singleAptInfo) {
  // console.log("createSingleAptPage:",singleAptInfo);
  const description = singleAptInfo.description;
  const mainContainer = document.getElementById("aptMain");
  const aptAddress = `
      ${singleAptInfo.address.street} 
      ${singleAptInfo.address.strType} 
      ${singleAptInfo.address.houseNumber}
      `;

  var slideShow = "";
  var dotsZone = "";
  let photoGallery = singleAptInfo.galleryImages;

  photoGallery.forEach((singlePhoto,index) => {
    try {
      singleAptInfo.galleryCaptions[index];
      var captionText = (singleAptInfo.galleryCaptions[index] !== undefined) ? 
        singleAptInfo.galleryCaptions[index] : "No caption available";
    } catch(e) {
      var captionText = "No caption available";
    }
    
    let photoSection = `
      <div class="mySlides fade">
        <div class="numbertext">${index+1} / ${photoGallery.length}</div>
        <img src=${singlePhoto} class="sliderImgStyle">
        <div class="captionTextContainer">
          <div class="captionText">${captionText}</div>
        </div>
      </div>

            `;
    let singleDot = `<span class="dot dot${index+1}"></span>
    `;
      
      dotsZone += singleDot;      
      slideShow += photoSection;
    
  })

  let singleAptMain = `
    <div id="single_apt_content">  
      <h1 class="heading">${singleAptInfo.name}</h1>
      <div class="apt_container">
        <div class="apt_left_column">
            <b>Address:</b> ${aptAddress}
            <br>
            <b>Description: </b>${singleAptInfo.description}
            <br>
            <input class="airbnButton" type="button" value="Go to apartment's Airbnb page">
            </div>
        <div class="apt_right_column">
          <!-- Slideshow container -->
          <div class="slideshow-container">
            <!-- Full-width images with number and caption text -->
            ${slideShow}
            <!-- Next and previous buttons -->
            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
          </div>
          <!-- The dots/circles -->
          <div style="text-align:center">
            ${dotsZone}
          </div>
        </div>
      </div>
    </div>
  `;
  mainContainer.innerHTML = singleAptMain;

  // Creating event listener for Airbnb page button
  let airBut = document.querySelector(".airbnButton");
  singleAptInfo.airbnbPageUrl ? 
    airBut.addEventListener("click", ()=>window.open(singleAptInfo.airbnbPageUrl))
    : airBut.style.display = "none";

  var i;
  
  // creating class for each picture dot (for event listener)
  for (i = 0; i < singleAptInfo.galleryImages.length; i++) {
    let currClass = `.dot${i+1}`;
    doti[(i)] = document.querySelector(currClass);
  }

}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// A function for displaying photo area
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

// A function creating events listeners for dot thumbnails under slider
function createListenersForDots () {
  doti.forEach((dot, i) => {
    let dotEventElm = document.querySelector(`.dot${i+1}`);
    dotEventElm.addEventListener("click", (e) => currentSlide(i+1))
  })
}

// Main body of file %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const doti=[]; // dots elements classes array
var queryString = decodeURIComponent(window.location.search);
var aptNum = queryString.substring(1);

// console.log("aptNum =", aptNum);
createSingleAptPage(allApts[aptNum]);

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
prev.addEventListener("click", (e) => plusSlides(-1));
next.addEventListener("click", (e) => plusSlides(1));

var slideIndex = 1;
showSlides(slideIndex);
createListenersForDots();