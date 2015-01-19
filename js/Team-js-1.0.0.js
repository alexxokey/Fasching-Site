$(document).ready(function(){

    $(".col-xs-4").click(function(){

        var data_toggel = getAtrDataToggel($(this));

        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parent().next().hide('fast');
            $(".col-xs-12").hide('fast');
        }
        else
        {
            $(".col-xs-4").removeClass('active');
            $(".hidden-hr").hide('fast');
            $(".col-xs-12").hide('fast');

            $(this).addClass('active');
            $(this).parent().next().show("fast");
            $(data_toggel).show("fast");
        }
    });

    function getAtrDataToggel(e) {
        var data_toggel = e.data("toggel");

        return '#'+data_toggel;
    }
});