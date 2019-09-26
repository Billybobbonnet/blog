var previousScrollPosition = false;
var audioOn = false;

var t
$('document').ready(function () {
  $('.ui.sidebar')
    .sidebar({
      dimPage: true,
      closable: true,
      transition: 'overlay'
    });
  $('.ui.dropdown')
    .dropdown({
      on: 'hover',
      action: 'hide'
    });
  $('.altion.image, .altion.video')
    .popup({
    })
    ;
  $('.altion.audio').mouseenter(function (event) {
    if (!audioOn) {
      var audio = new Audio(event.currentTarget.getAttribute('data-source'));
      $(event.currentTarget).addClass('playing')
      audioOn = true;
      audio.play();
      audio.onended = function () {
        audioOn = false
        $(event.currentTarget).removeClass('playing')
      };
    }
  })
})

$(function () {
  var $window = $(window),
    $body = $('body');

  // Disable animations/transitions until the page has loaded.
  $body.addClass('is-loading');
  NProgress.start();
  $window.on('load', function () {
    $body.removeClass('is-loading');
    NProgress.done();
  });
});