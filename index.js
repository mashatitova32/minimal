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
    mobiLeftFirst: true,
    responsive: [
        {
            breakpoint: 400,
            setting: {
                sliderToShow: 2,
                sliderToScroll: 2
            }
        },
        {
            breakpoint: 1024,
            setting: 'unslick'
        },
    ]
}

$(document).ready(function (){
    $('.slider').slick(settingSlider);
})