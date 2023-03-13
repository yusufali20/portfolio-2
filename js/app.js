// $(document).on('click', 'ul li', function(){
//     $("this").addClass("active_color").siblings().removeClass("active_color");
// })
// var item = document.querySelectorAll('a');
// var currentLocation = location.href;
// for(var i =0; i<=item.length;i++){
//     if(item[i].href===currentLocation){
//         item[i].className='active_color';
//     }
// }


// =============banner jquery slider start=>>>>>>>>>>>>>
$('#banner_slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// =============banner jquery slider end=>>>>>>>>>>>>>

// =============screenshot jquery slider start=>>>>>>>>>>>>>
$('.items').slick({
  dots: true,
  arrows: false,
  infinite: true,
  centerMode: true,
  centerPadding: '',
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoPlaySpeed: 2000,
  responsive: [{
      breakpoint: 1199,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});
// =============screenshot jquery slider end=>>>>>>>>>>>>>


// =============video part js slider start=>>>>>>>>>>>>>
new VenoBox({
  selector: '.my-video-links',
});
// =============video part js slider end=>>>>>>>>>>>>>


// =============feedback part jquery slider start=>>>>>>>>>>>>>
$('.details_slider').slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: '.img_slider',
  fade: true,
});
$('.img_slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '0',
  asNavFor: '.details_slider',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
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
// =============feedback part jquery slider end=>>>>>>>>>>>>>