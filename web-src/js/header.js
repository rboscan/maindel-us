$(window).scroll(function() {
    if($(this).scrollTop() > 300) {
        $('.navbar navbar-expand-lg navbar-light').addClass('opaque');
    } else {
        $('.navbar navbar-expand-lg navbar-light').removeClass('opaque');
    }
});