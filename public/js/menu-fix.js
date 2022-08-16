$(document).ready(function () {

    $('#myNavmenu').on('show.bs.offcanvas', function (e) {
        $('#navbar-close-zone').css("display","block");
    });
    $('#myNavmenu').on('hide.bs.offcanvas', function (e) {
        $('#navbar-close-zone').css("display","none");
    });
    $('#navbar-close-zone').on('click', function(){
        if( $('#myNavmenu').hasClass('in') ){
            $("#myNavmenu").trigger("offcanvas.toggle");
        }
    });
});
