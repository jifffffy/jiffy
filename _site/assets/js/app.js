
var _followP = 0;

$(document).ready(function () {

    $(".menuebtn").click(function () {
        if ($(".nav").hasClass("show")) { $(".nav").removeClass("show"); }
        else { $(".nav").addClass("show"); }
    });


    //滚动条位置发生改变
    $(window).scroll(function () {

        if ($(document).scrollTop() <= 0) {
            //滚动条已经到达顶部
            $(".toolbtn>.toup").addClass("hide");
        }
        else if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
            //滚动条已经到达底部
            $(".toolbtn>.toup").removeClass("hide");
        }
        else {
            $(".toolbtn>.toup").removeClass("hide");
        }
    });

    // $(".rightarea>.submission,.toolbtn>.toolsubmi>a").click(function () { ShowAddPost(); });

    //滑到顶部点击事件
    $(".toolbtn>.toup").click(function () { $("html,body").animate({ scrollTop: 0 }, 500); });
    //页面关闭事件
    $(".toolbtn>.close").click(function () { window.close(); });

    if (IsMobile()) { $(".mobilelogo").removeClass("hide"); }

    try {
        _followP = $('.qrcode').position().top;
    } catch (e) {
    }
    try {
        $(document).scroll(function () {
            if ($(document).width() >= 1000) {
                if ($(window).scrollTop() >= _followP) {
                    $('.qrcode').addClass("fixed");
                }
                else {
                    $('.qrcode').removeClass("fixed");
                }
            }
        });
    } catch (e) {

    }

});

function IsMobile() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return true;
    }
    else {
        return false;
    }
}