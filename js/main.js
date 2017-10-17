$(function() {
    /*! slide */



    $(window).resize(function() {
        resize(window.innerWidth < 640);
    }).trigger("resize");
    $('[data-toggle="tooltip"]').tooltip();

    function resize(smallWindow) {

        if (smallWindow) {
            $("#slide>.carousel-inner>.item").each(function(index, ele) {

                $(ele).html("<img src=" + $(ele).data("small") + ">");
                $(ele).css("background-image", "");

            })

            var ulWidth = 20;
            $("#suggest>.container>.scroll>ul>li").each(function(index, ele) {
                ulWidth = ulWidth + parseInt($(ele).css("width"));

            })
            $("#suggest>.container>.scroll>ul").css("width", ulWidth);
            $("#suggest>.container>.scroll").css("overflow-x","scroll");
           


        } else {

            $("#slide>.carousel-inner>.item").each(function(index, ele) {
                $(ele).html("");
                $(ele).css("background-image", "url(" + $(ele).data("lg") + ")");


            })
             $("#suggest>.container>.scroll>ul").css("width", "100%");
            $("#suggest>.container>.scroll").css("overflow-x","auto");

        }


    }
    console.log($(".news-tabs>li>a"));
    $(".news-tabs>li>a").each(function(index, ele) {

        $(ele).click(function() {
            $(".news-title").text($(this).data("content"));
        })
    })

})