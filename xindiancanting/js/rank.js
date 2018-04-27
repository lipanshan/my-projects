$(function (){
    var meunScroll1 = new BScroll($('#listWrapper')[0], {
        click: true,
        scrollY: true,
        pullUpLoad:{                //做加载更多时用
            threshold: -70 // 当上拉到超过顶部 70px 时，
        }
    });
})