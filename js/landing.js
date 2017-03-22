$(document).ready(function() {
  const base = 'https://website-athena.herokuapp.com';
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

  function showFacebookPosts() {
    fetch(`${base}/facebook`)
    .then(response => {
     return response.json();
    })
    .then(data => {
      const elems = data.map(post => {
        return `<div class="carousel-cell">
          <img src=${post.image}>
        </div>`
      });
      $('#facebook-carousel').append(elems.join(''));
      $('#facebook-carousel').flickity({
        imagesLoaded: true,
        percentPosition: false
      });
    })
    .catch(err => {
      // error
    })

  }

  function showInstagramPosts() {
    fetch(`${base}/instagram`)
    .then(response => {
     return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      // error
    })
  }

  function init() {
    openSignup();
    closeSignup();
    showFacebookPosts();
    showInstagramPosts();
  }
  init();
})
