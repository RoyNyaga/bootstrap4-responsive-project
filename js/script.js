// Magnific pop

$(document).ready(function () {
  $('.image-container').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery: {
	  	enabled: true
	  }
  })
})

// owl carousel
$(document).ready(function () {
  var owl = $('.owl-carousel')
  owl.owlCarousel({
			    items: 4,
			    loop: true,
			    nav: true,
			    margin: 10,
			    autoplay: true,
			    autoplayTimeout: 2000,
			    smartSpeed: 4000,
			    autoplayHoverPause: true,
			    responsive: {
		        0: {
		            items: 2
		        },
		        600: {
		            items: 3
		        },
		        1000: {
		            items: 3
		        }
		    }
  })
  $('.play').on('click', function () {
			    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function () {
			    owl.trigger('stop.owl.autoplay')
  })
})
