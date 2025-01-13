let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('fa-times');

}


window.onscroll = () => {
  navbar.classList.remove('active');

}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let interval = setInterval(function () {
  plusSlides(1);
}, 5000);










function updateLastUpdated() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const theDate = new Date(document.lastModified);

  theDate.setTime((theDate.getTime() + (5 * 60 * 60)));
  with (theDate) {
    document.getElementById("last-updated").innerHTML = "<i>Last Updated : " + getDate() + ' ' + months[getMonth()] + ' ' + getFullYear() + ' ' + getHours() + ':' + getMinutes() + " GMT</i>";
  }

}


updateLastUpdated();

function showDiv(bioId) {
  let hiddenDiv=document.getElementById("bio");
  var bioDiv = document.getElementById(bioId);
  if (bioDiv.style.display === "none") {
      bioDiv.style.display = "block";
  } else {
      bioDiv.style.display = "none";
  }
}

