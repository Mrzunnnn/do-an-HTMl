$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true /*vong lap slider */,
      margin: 10 /*khoang cach giua 2 PT*/,
      nav: true /* thanh dieu huong*/,
      dots: true /*dau cham  */,
      autoplay: true /* de slider tu chay */,
      autoplayTimeout: 5000 /*cai dat thoi gian tu chay cua sli */,
      responsive: {
        /*Hien thi item tren cac khoang man hinh  */
        0: {
          items: 4,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 4,
        },
      },
    });
  });