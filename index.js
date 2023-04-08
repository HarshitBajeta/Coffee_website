$('.cont').slick({
    autoplay: true,
  autoplaySpeed: 2000,
  fade:true,
  cssEase:'linear',
  dots:true,
  adaptiveHeight: true
});

$('.cc').slick({
    dots: false,
    infinite: false,
    speed: 800,
    cssEase:'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
   
    ]
  });

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop >700) {
    document.getElementById("navi").style.backgroundColor = "grey";
  } else {
    document.getElementById("navi").style.backgroundColor = "";
  }
}
// const di=document.getElementById("do")
// console.log(di)
// di.addEventListener("mouseover",trans)
// const a=document.getElementsByClassName("image")
// const b=document.getElementsByClassName("cont")
// function trans(){
//     di.firstElementChild.style.transition="height 4s"
//     console.log("kkkkk")
// }