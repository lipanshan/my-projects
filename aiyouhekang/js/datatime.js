$(function() {

    $(".gender-cancel").click(function() {
        $(".select-gender").hide();
    })
    $("#show-gender").click(function() {
        $(".select-gender").show();
        var gender = new Swiper('.gender-swiper', {
            slidesPerView: 3,
            direction: 'vertical',
            centeredSlides: true,
            initialSlide: 0,
            slideToClickedSlide: true
        });
    })
    $(".gender-true").click(function() {
        $("#show-gender input").val($(".select-gender .swiper-slide-active").text().trim())
        $(".select-gender").hide();
    })
})