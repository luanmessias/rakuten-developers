var windowWidth = window.innerWidth;

$(document).ready(function () {



});

var velocity = 0.5;

function update() {
    var pos = $(window).scrollTop();
    $('.help').each(function () {
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height() + 800;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
    });
    $('.header').each(function () {
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height() + 800;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
    });
};

$(window).bind('scroll', update);