const settingSlider = {
    dots: true,
    arrows: true,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    sliderToShow: 1,
    sliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '60px',
    mobiLeftFirst: true,
    responsive: [
        {
            breakpoint: 480,
            setting: {
                sliderToShow: 2,
                sliderToScroll: 2
            }
        }, {
            breakpoint: 760,
            setting: {
                sliderToShow: 2,
                sliderToScroll: 1
            }
        },

        // {
        //     breakpoint: 1024,
        //     setting: 'unslick'
        // },
    ]
}

$(document).ready(function (){
    $('.slider').slick(settingSlider);
})