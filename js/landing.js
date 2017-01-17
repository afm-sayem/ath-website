$(document).ready(function() {
  function openSignup() {
    $('.open-dialog').each(function (index, element) {
      element.onclick = function () {
        ga('send', {
          hitType: 'event',
          eventCategory: 'WriteReview',
          eventAction: 'open',
          eventLabel: 'Platform E Pop Up Event'
        });
        $('.modal')[0].classList.add('active');
      };
    });
  }

  function closeSignup() {
    $('.close-dialog').each(function (index, element) {
      element.onclick = function () {
        $('.modal')[0].classList.remove('active');
      };
    });
  }

  function init() {
    openSignup();
    closeSignup();
  }
  init();
})
