$(function () {
    $('.btn-nav').on("click", function () {
        $(this).toggleClass('open');
        $('#gnav').toggleClass('open');
    });
});