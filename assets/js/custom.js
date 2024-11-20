// slick slider
$(".slick-slider").slick({
  slidesToShow: 2,
  infinite:true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
 });


 var is_mobile = 'No';

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      is_mobile = 'Yes';
      $(".slick-slider1, .slick-slider11").slick({
          slidesToShow: 1,
          infinite:true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000
         });
  }
 
  if(is_mobile=='No')
  {
      $(".slick-slider1, .slick-slider11").slick({
          slidesToShow: 3,
          infinite:true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000
         });
  }


//    // slick slider gallery


//       // slick slider amenities
// $(".slick-slider11").slick({
//     slidesToShow: 3,
//     infinite:true,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000
//    });
