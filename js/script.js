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
  
 // mobile bar bootstrap
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let changeIcon =function(icon){
  icon.classList.toggle('fa-times')
}
function myFunction() {
  document.getElementById("videobg").style.display = "none";
}