//navlinks menu mobile
const toggleButton = document.getElementsByClassName('btn-toggle')[0]
const navbarLinks = document.getElementsByClassName('menu-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//ler mais/ler menos btn
function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Ler mais";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Ler menos";
      moreText.style.display = "inline";
    }
}

//// buttons do slider 1 projetos 
const wrapper = document.querySelector(".slider-wrapper");
const carousel = document.querySelector(".slider");
const arrowsBtns = document.querySelectorAll(".slider-wrapper i"); //botoes
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card =>{
    carousel.insertAdjacentHTML("beforeEnd", card.outerHTML);
});

arrowsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");

};

const autoPlay = () => {
    if(window.innerWidth < 800) return; //retorna se window for menor que 800
    //autoplay carrosel acada 4000ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 4000)

}
autoPlay();

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    } 

    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

//seg tentativa dots

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("card");
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

//slide2 pag inicial depoimentos


// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("textslide");
//   var dots = document.getElementsByClassName("dot2");
//   if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides2(n) {
  var dotsF = document.getElementsByClassName("dot");

  for (i = 0; i < dotsF.length; i++) {
    dotsF[i].classList.remove("active");
  }

  dotsF[slideIndex2 - 1].classList.add("active");
}
function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("textslide");
  var dots = document.getElementsByClassName("dot2");

  if (n > slides.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex2 - 1].classList.add("active");
  dots[slideIndex2 - 1].classList.add("active");
}
let startX2 = 0;
let isDragging2 = false;

const slider2Container = document.querySelector(".slider2text", "slider");

slider2Container.addEventListener("mousedown", (e) => {
  isDragging2 = true;
  startX2 = e.pageX;
});

slider2Container.addEventListener("mouseup", (e) => {
  if (!isDragging2) return;
  isDragging2 = false;

  let endX2 = e.pageX;
  let diffX2 = endX2 - startX2;

  if (diffX2 > 50) {
    // arrastou para a direita → volta slide
    plusSlides2(-1);
  } else if (diffX2 < -50) {
    // arrastou para a esquerda → próximo slide
    plusSlides2(1);
  }
});

// também funciona em touch (mobile)
slider2Container.addEventListener("touchstart", (e) => {
  startX2 = e.touches[0].clientX;
}, false);

slider2Container.addEventListener("touchend", (e) => {
  let endX2 = e.changedTouches[0].clientX;
  let diffX2 = endX2 - startX2;

  if (diffX2 > 50) {
    plusSlides2(-1);
  } else if (diffX2 < -50) {
    plusSlides2(1);
  }
}, false);

