$(".navegação a").click(function () {
    var id = $(this).attr("href");
    $("section").removeClass("active");
    $(id).addClass("active");
    $(".navegação a").removeClass("active");
    $(this).addClass("active");
});
