$('.customer-bottom').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./images/arrow-back.png' alt=''></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><img src='./images/arrow-next.png' alt=''></button>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
        arrows: false,
      }
    }]
});

const showMenu = () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}
