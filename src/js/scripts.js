


$(".slaider-main-banner").slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    speed: 500,
    fade: !0,
    cssEase: "linear",
});




$('.stone-page__images').slick({
     adaptiveHeight: true,
     dots: false,
     infinite: true,
     arrow: true,
     slidesToShow: 3,
     prevArrow: '<button type="button" class="slick-prev"></button>',
     nextArrow: '<button type="button" class="slick-next"></button>',
     responsive: [
         {
          breakpoint: 1340,
          settings: {
            slidesToShow: 3,
              fade: false,
          }
        },
         {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
              fade: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
              fade: true,
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            fade: true,
          }
        }
      ]
 });


$('.more-item').slick({
     adaptiveHeight: true,
     dots: false,
     infinite: true,
     arrow: true,
     slidesToShow: 3,
     prevArrow: '<button type="button" class="slick-prev"></button>',
     nextArrow: '<button type="button" class="slick-next"></button>',
     responsive: [
         {
          breakpoint: 1340,
          settings: {
            slidesToShow: 3,
              fade: false,
          }
        },
         {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
              fade: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
              fade: true,
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            fade: true,
          }
        }
      ]
 });

$('.panel-trigger').on('click', function(){
    $('.panel, .hpanel').removeClass('open');
    var label = $(this).attr("data-panel");
    $('#' + label + ', .mask').addClass('open');
});

$('.close, .mask').on('click', function(){
    $('.panel, .hpanel, .mask').removeClass('open');
});





function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.language')) {
    var dropdowns = document.getElementsByClassName("language-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



$('.social__link--search').click(function(e){
  $(this).closest('.search-block').addClass('search-block__show');
  e.preventDefault();
});

$('body').on('click', function(e){
  if (!$(event.target).closest('.search-block').length) {
    $('.search-block').removeClass('search-block__show')
  }
})



