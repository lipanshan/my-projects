$(function () {

// 禁止input弹出键盘
    $(".disablekey").focus(function () {
        document.activeElement.blur();
    });

// 添加时间
    var date = new Date();
    var weekDay = ["日", "一", "二", "三", "四", "五", "六"];
    var html = "";
    for(var i = 0; i < 30; i++){
        var getdate = date.getDate();
        var getMonth = date.getMonth();
        var getDay = date.getDay();
        var getYear = date.getFullYear();
        console.log(getYear)
        html += '<div class="swiper-slide">' +
                '<div class="datepicker-date-item" data-date="'+ getYear +"."+(getMonth +1)+"."+ getdate +'">'+ (getMonth +1) + "月"+ getdate + "日" + "星期" + weekDay[getDay] + '</div>' +
                '</div>'
        $(".datepicker-date-container .swiper-wrapper").html(html);
        date.setDate(date.getDate() + 1);
    }
    $(".datepicker-date-container .swiper-slide:first-child datepicker-date-item").text("今天")

// 初始化 swiper
    $(".datapicker").click(function () {
        $(".datepicker-modal").show();
        var datepicker = new Swiper('.swiper-container', {
            slidesPerView: 5,
            direction: 'vertical',
            centeredSlides: true,
            initialSlide :0,
            slideToClickedSlide: true
        });
    })
// 取消按钮
    $(".datepicker-cancel").click(function () {
        $(".datepicker-modal").hide();
    })
// 确认按钮
    $(".datepicker-true").click(function () {
        var time = $(".datepicker-date .swiper-slide-active .datepicker-date-item").data("date");
        var hour = $(".datepicker-hour .swiper-slide-active .datepicker-date-item").text();
        $(".datapicker").val(time +" "+hour);
        $(".datepicker-modal").hide();
    })
})