function scrollElem(n) {
    if (n == 1){elem = $('#main')}
    if (n == 2){elem = $('#portfolio')}
    if (n == 3){elem = $('#me')}
    
    
       $('html, body').animate({scrollTop:$(elem).position().top - 0}, 1000);
}