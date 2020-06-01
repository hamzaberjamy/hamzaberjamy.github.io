
// Custom active class when click on nav item
$('li > a').click(function() {
    $('li').removeClass('active');
    $(this).parent().addClass('active');
});