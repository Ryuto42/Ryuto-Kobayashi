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