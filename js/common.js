//scroll

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 700,
      framesCount = 40;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

//navigation
function myFunction(){
  var x = document.getElementById("navHeader");
  if(x.className === "header-menu"){
    x.className += " responsive";
  }else{
    x.className = "header-menu";
  }
}
// slider 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex = slideIndex + n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var slides = document.getElementsByClassName("slider-item");
  if(n >slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  for(var i = 0; i < slides.length; i++){
    slides[i].style.display="none";
  }
  slides[slideIndex - 1].style.display = "block";
}
// galery-slider
var slideIndex = 1;
showModalSlides(slideIndex);

function plusModalSlides(n){
  showModalSlides(slideIndex = slideIndex + n);
}

function currentModalSlide(n){
  showModalSlides(slideIndex = n);
}

function showModalSlides(n){
  var modalSlides = document.getElementsByClassName("modal-item");
  if(n >modalSlides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = modalSlides.length;
  }
  for(var i = 0; i < modalSlides.length; i++){
    modalSlides[i].style.display="none";
  }
  modalSlides[slideIndex - 1].style.display = "flex";
}
//galery
function galeryShow(){
  var modal = document.getElementById("modal");
  modal.style.display = "flex";
  
}

function modalClose(){
  modal.style.display = "none";
}

//call button
/*function callMe(){
  var counter = 2;
  var call = document.getElementById("call");
  call.style.display = "block";
  counter++;
  if(counter % 2 != 0){ //если окно открыто
    
  }
}*/

function callMeOut(){
  var call = document.getElementById("call");
  call.style.display = "none";
}

// AJAX ОТПРАВКА ФОРМЫ
document.getElementById("submitForm").onclick = ajaxSendForm;
function ajaxSendForm(){
  var request = new XMLHttpRequest();
  var name = document.getElementById('userName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var text = document.getElementById('text').value;
   request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        var response = JSON.parse(request.responseText);
        alert(response.anserw);
      } else {
        alert('There was a problem with the request.');
      }
    }
};
    request.open("POST", "form.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send('userName=' + name + '&email=' + email + '&phone=' + phone + 
  '&text' + text);
};
// map
function initMap() {
  var uluru = {lat: 59.832313, lng: 30.347786};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    animation: google.maps.Animation.DROP
  });
};
