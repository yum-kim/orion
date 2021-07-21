$('document').ready(function () {

    // 언어선택메뉴

    $('.langSelect .arrow').toggle(function () {
        $('.langSelect .aList').fadeIn('fast');
        $('.langSelect .arrow').css('background-image', 'url(common/images/langselect_down.png)');

    }, function () {
        $('.langSelect .aList').fadeOut('fast');
        $('.langSelect .arrow').css('background-image', 'url(common/images/langselect.png)');
    });

    // 네비 드롭다운 효과
    
    var zoomx = 100;
    $(document).ready(function () {
        $(".headerInner").hover(
            function () {
                $(".headerInnerbottom").stop().slideDown(400);
            },
            function () {
                $(".headerInnerbottom").stop().slideUp(600);
            }
        );

        $(".headerInnerbottom").hover(
            function () {
                $(".headerInnerbottom").stop().slideDown(400);
            },
            function () {
                $(".headerInnerbottom").stop().slideUp(600);
            }
        );

        $(".tabBtn").hover(
            function () {

                $(this).children(".icon_normal").css("display", "none");
                $(this).children(".icon_over").css("display", "block");
            },
            function () {
                $(this).children(".icon_over").css("display", "none");
                $(this).children(".basic").css("display", "block");
            }
        );

        $(".tabBtn").click(
            function () {

                $("." + $(this).attr("tarx")).children(".icon_normal").addClass("basic");
                $("." + $(this).attr("tarx")).children(".icon_over").removeClass("basic");
                $(this).children(".icon_over").addClass("basic");
                $(this).children(".icon_normal").removeClass("basic");

                $("." + $(this).attr("tarx")).children(".icon_over").css("display", "none");
                $("." + $(this).attr("tarx")).children(".icon_normal").css("display", "none");
                $("." + $(this).attr("tarx")).children(".basic").css("display", "block");


                $("." + $(this).attr("tarc")).css("display", "none");
                $("#" + $(this).attr("tar")).css("display", "block");

                $("#" + $(this).attr("tarmc")).attr("href", $(this).attr("tarm"));

            }
        );

        //class="tabBtn tabBtngroupA" tar="lastA_1" tarc="lastA_1" tarx="tabBtngroupA"
    });

    function body_zoomin() {
        zoomx = zoomx + 10;
        $("body").css("zoom", zoomx + "%");
    }

    function body_zoomout() {
        zoomx = zoomx - 10;
        $("body").css("zoom", zoomx + "%");
    }

    function body_zoomdef() {
        zoomx = 100;
        $("body").css("zoom", zoomx + "%");
    }

    function newWin(url, w, h) {
        window.open(url, 'new_win', 'width=' + w + ',height=' + h + ',toolbars=no,menubars=no,scrollbars=auto');
    }

});

//ct04 슬라이드

