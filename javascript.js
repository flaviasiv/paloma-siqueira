//navlinks menu mobile
const toggleButton = document.getElementsByClassName('btn-toggle')[0]
const navbarLinks = document.getElementsByClassName('menu-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//navbar scroll up

var lastScrollTop = 0;
  navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  var scrollTop = window.pageXOffset
  || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar.style.top="-80px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
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

// buttons do slider 1 projetos 
// seg tentativa
new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '#dots',
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

//slide2 pag inicial depoimentos
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
  var slides = document.getElementsByClassName("textslide");
  var dots = document.getElementsByClassName("dot2");
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
//var slider_img = document.querySelector('.slider-img');
//var images = ['#slide1, #slide2, #slide3, #slide4, #slide5'];
//var i = 0; // current img index

//function prev(){
//    if(i <= 0) i = images.length;
//    i--;
//    return setImg();
//}

//function next(){
//    if( i >= images.length-1 ) i = -1;
//    i++;
//    return setImg();
//}

//function setImg(){
//    return slider_img.setAttribute('src', '.assets/'+images[i]);
//}


//planA

//let children = document.querySelector('.slider a').children;
//let i = 0;

//children[i].classList.add('selected');// Item default selection

//function resetClass() {
//    for (let j = 0; j < children.length; j++) {
//        children[j].classList.remove('selected');
//    }
//}

//function next() {
//    if (i >= children.length - 1) {
//        return false;
//    }
//    resetClass();
//    i++;
//    children[i].classList.add('selected')
//}

//function previous() {
//    if (i <= 0) {
//        return false;
//    }
//    resetClass();
//    i--;
//    children[i].classList.add('selected')
//}