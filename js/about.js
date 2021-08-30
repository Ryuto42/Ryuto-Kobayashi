$('.animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.animation').each(function(){
  var targetPosition = $(this).offset().top;
   if(topWindow > targetPosition - windowHeight + 150){
    //ここで表示時間の変化できる
   $(this).addClass("fadeInRight");
  }
 });
});


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