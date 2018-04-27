var page = 1, //分页码
    off_on = false, //分页开关(滚动加载方法 1 中用的)
    timers = null; //定时器(滚动加载方法 2 中用的)

//加载数据
var LoadingDataFn = function () {
    var dom = '';
    for (var i = 0; i < 10; i++) {
        dom += '<div class="vote-item">' +
            '<div class="vote-item-img">' +
            '<img src="http://img4.duitang.com/uploads/item/201511/26/20151126112617_vUaQf.jpeg" alt="">' +
            '</div>' +
            '<div class="vote-item-text">' +
            '<p class="item-text1">大花猫</p>' +
            '<p class="item-text2">编号：098763</p>' +
            '<p class="item-text3">票数：<span>2504</span></p>' +
            '<div class="votebtn">投票</div>' +
            '</div>' +
            '</div>';
    }
    $('.vote-main-queen').append(dom);
    off_on = true;
};

//初始化
$(document).ready(function () {
    LoadingDataFn();
});


$(window).scroll(function () {
    if (($(window).height() + $(window).scrollTop() + 60) >= $(document).height()) {
        clearTimeout(timers);
        timers = setTimeout(function () {
            page++;
            // console.log("第" + page + "页");
            LoadingDataFn();
        }, 300);
    }
});