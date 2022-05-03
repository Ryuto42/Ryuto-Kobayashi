var vh=window.innerHeight;
$('section').css('height',$(window).height());
console.log(vh);


$(function() {
  $('a:not([href^="#"]):not([target])').on('click', function(e){
      e.preventDefault();
      url = $(this).attr('href');
      if (url !== '') {
          $('body').addClass('is_remove');
          setTimeout(function () {
              window.location = url;
          }, 1000);
      }
      return false;
  });
});

var fixLoad = function(){
  document.body.classList.remove("is_fade");
  document.body.classList.remove("is_remove");
} 
history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
window.addEventListener('popstate', function() {
  fixLoad();
}, false);

if (navigator.userAgent.indexOf('iPhone') > 0) {
  let body = document.getElementsByTagName('body')[0];
  body.classList.add('iPhone');
}

if (navigator.userAgent.indexOf('iPad') > 0) {
  let body = document.getElementsByTagName('body')[0];
  body.classList.add('iPad');
}