if( $('.nav-item.active').hasClass( "user-menu" ) ) {
    $('.username').removeClass('collapsed').attr("aria-expanded", true);
}
else {
    $('.nav-item.active').parents('a[data-toggle]').removeClass('collapsed').attr("aria-expanded", true);
}

$('.nav-item.active').closest('.collapse').addClass('show');

$('.change-password-button').on('click', function(){
    $("#change-password-fields").toggleClass('invisible');
})