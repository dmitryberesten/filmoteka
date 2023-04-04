//-----------------------------HORYZONTAL-INDICATOR-----------------------------//
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}
//-----------------------------HORYZONTAL-INDICATOR-----------------------------//

//--------------------------------CUSTOM-ANCHOR---------------------------------//
//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight() * 1.2;

$(window).scroll(function () {
  if ($(document).scrollTop() > toggleHeight) {
    //Adds active class to make button visible
    $('#up-button').addClass('active');
  } else {
    //Removes active class to make button visible
    $('#up-button').removeClass('active');
  }
});
const circleUp = document.querySelector('.up-button');

circleUp.addEventListener('click', setScrollToUp);

function setScrollToUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
//------------------------------CUSTOM-ANCHOR-END-------------------------------//
