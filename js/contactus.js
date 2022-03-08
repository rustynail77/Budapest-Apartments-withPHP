import allApts from "./aptsData.js";

function apartmentSelector() {
    var aptValues = `<option value="" disabled selected>
        Select Your Desired Apartment
        </option>`;
    allApts.forEach((apartment,index) => {
        let tempValue = `<option class="optionList" value="${index}">${apartment.name}</option>`;
        aptValues += tempValue;
    });
    let selectedApt = document.querySelector(".aptSelector");
    selectedApt.innerHTML = aptValues;

    const selectElement = document.querySelector('.aptSelector');
    selectElement.addEventListener('change', (event) => {
        let imgSrc=allApts[event.target.value].featImg;
        setAptImg(imgSrc, event.target.value);
    })
}

// function gets apartment number (pageUrl) and apartment image url (imgSrc)
// and displays the image in right column of form
function setAptImg(imgSrc, pageUrl) {
    if (pageUrl) {
        // specific apartment was selected by user
        var imgZone = `<a href="./single_apt_template.html?${pageUrl}"> 
                <img class="contact__apt_image" src="${imgSrc}"></img></a>`;
        var backToVis = "visible";
    } else {
        // no apartment was selected by user
        var imgZone = `<img class="contact__apt_image" src="${imgSrc}"></img>`;
        var backToVis = "hidden";
    }
    let rightColImg = document.querySelector(".right_column__img");
    rightColImg.innerHTML = imgZone;
    let backToAptObj = document.querySelector(".back_to_apt_page");
    backToAptObj.style.visibility = backToVis;
    rightColImg.addEventListener("mouseover", ()=> backToAptObj.style.visibility="hidden");
    if (pageUrl) {rightColImg.addEventListener("mouseleave", ()=> backToAptObj.style.visibility="visible")};

}

// function for sending user input from contact form by invoking email app
function submitButton() {
    document.querySelector(".submitButton").addEventListener('click', (e)=> {
        let fName = document.getElementById("fname").value;
        let lName = document.getElementById("lname").value;
        let eMail = document.getElementById("email").value;
        let select = document.getElementById("apt");
        let apt = select.options[select.selectedIndex].value;
        let aptName = apt ? allApts[apt].name : "No apartment selected";
        let freeText = document.getElementById("freetext").value;
        let myMessage = `You have a message from ${fName} ${lName}, regarding the above mentioned apartment, saying: ${freeText}.`;
        let thankYou = document.querySelector(".thankYou");
        thankYou.style.display = "initial";
        let mailText = `mailto:${eMail}?subject=${aptName}&body=${myMessage}`;
        // window.open(mailText);
        let closeButton = document.querySelector(".closeBut");
        closeButton.addEventListener('click', (e) => {
            thankYou.style.display = "none";
            document.querySelector('#contactForm').submit();
            window.open("/budapest-apartments/index.html");
            }
        );
    });
}



setAptImg('./images/CIMG1916.JPG');
apartmentSelector();
submitButton();