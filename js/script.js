$('.brand').slick({
    
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinate: true,
    pauseOnHover:false,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  })
  
  // play-video
  
  // pricing-tabs