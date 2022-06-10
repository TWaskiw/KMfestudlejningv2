// Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";

// impoterer funktioner til modulet
window.contactSuccess = (event) => contactSuccess(event);
window.mobileNav = () => mobileNav();
window.plusSlides = (n) => plusSlides(n);
window.currentSlide = (n) => currentSlide(n);
window.filterByKeyword = (keyword) => filterByKeyword(keyword);
window.filterAll = (keyword) => filterAll(keyword);
window.scrollDown = () => scrollDown();
window.heroScrollDown = () => heroScrollDown();

// Importér database + CRUS
import {
  getFirestore,
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAVoadKWObjeSokbsPBt0l7cIta6tAvFDs",
  authDomain: "km-festudlejning.firebaseapp.com",
  projectId: "km-festudlejning",
  databaseURL: "km-festudlejning.firebaseio.com",
  storageBucket: "km-festudlejning.appspot.com",
  messagingSenderId: "500346358771",
  appId: "1:500346358771:web:9d8d89bab2354e12dea086",
  measurementId: "G-DXQ30604P2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const _db = getFirestore();

let _produkter = collection(_db, "produkter");

onSnapshot(_produkter, (snapshot) => {
  _produkter = snapshot.docs.map((doc) => {
    const produkt = doc.data();
    produkt.id = doc.id;
    return produkt;
  });
  _produkter.sort((a, b) => a.name.localeCompare(b.name));
  console.log(_produkter);
});

// Append-funktion der viser alle produkter når "Vis alle" er valgt.
function filterAll(keyword) {
  const appendAllProducts = _produkter;

  document.getElementById("brand-header").innerText = keyword;
  document.getElementById("filterDiv").innerHTML = appendAllProducts
    .map((produkt) => {
      return `<h2 class="menu-h2"><b>${produkt.name}</b> <span class="menu-right">${produkt.price} kr,-</span></h2>
      <p class="menu-text-grey">Alk. ${produkt.alcohol}% - ${produkt.type}<span class="menu-right">${produkt.volume} l.</span></p>
      <hr>`;
    })
    .join("");

  return appendAllProducts;
}

// Append-funktion der viser specifikke produkter, for det brand brugeren har trykket på.
function filterByKeyword(keyword) {
  const filteredProducts = _produkter.filter((produkt) => {
    return produkt.brand === keyword;
  });

  document.getElementById("brand-header").innerText = keyword;
  document.getElementById("filterDiv").innerHTML = filteredProducts
    .map((produkt) => {
      return `<h2 class="menu-h2"><b>${produkt.name}</b> <span class="menu-right">${produkt.price} kr,-</span></h2>
      <p class="menu-text-grey">Alk. ${produkt.alcohol}% - ${produkt.type}<span class="menu-right">${produkt.volume} l.</span></p>
      <hr>`;
    })
    .join("");

  return filteredProducts;
}

// Toggler mellem at tilføje "responsive" class til topnav når brugeren trykker på ikonet.
function mobileNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("menuActive");
    current[0].className = current[0].className.replace(" menuActive", "");
    this.className += " menuActive";
  });
}

function contactSuccess(event) {
  const name = document.getElementById("fname");
  const email = document.getElementById("email");
  const message = document.getElementById("subject");
  const number = document.getElementById("phone");
  if (
    name.value !== "" &&
    email.value !== "" &&
    number.value !== "" &&
    subject.value !== ""
  ) {
    alert(
      "Tak for din interesse i KM festudlejning, vi vender tilbage til dig hurtigst muligt!"
    );
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function scrollDown() {
  setTimeout(() => {
    window.scrollTo({
      top: 800,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
}

function heroScrollDown() {
  window.scrollTo({
    top: 800,
    left: 0,
    behavior: "smooth",
  });
}

anime({
  targets: "#km-color",
  color: "#edc074",
  duration: 3000,
  delay: 700,
});
