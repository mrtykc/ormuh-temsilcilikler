$(document).ready(function () {

    
    $(".temsilci ul li div.baslik a.baslik").on("click", function () {

        $(".temsilci ul li div.altbaslik").slideUp();
        

        if($(this).parent().find(".updown a img").css("margin-top") == "0px")
        {
            $(".temsilci ul li div.baslik div.updown img").css("margin-top", "0px");
            $(this).parent().find(".updown a img").css("margin-top", "-45px");
            $(this).parents("li").find(".altbaslik").slideDown();   
            

        }
        else if($(this).parent().find(".updown a img").css("margin-top") == "-45px")
        {
            
            $(this).parent().find(".updown a img").css("margin-top", "0px");
        }
        
        return false;

    });

    $(".temsilci ul li div.altbaslik div.iladi a.altbaslik").on("click", function () {
        
        $(".temsilci ul li div.maddelist").slideUp();
        
        if($(this).parent().find(".updown a img").css("margin-top") == "0px")
        {
            $(".temsilci ul li div.altbaslik div.updown a img").css("margin-top", "0px");
            $(this).parent().find(".updown a img").css("margin-top", "-35px");
            $(this).parents(".altbaslik").find(".maddelist").slideDown();
        }
        else
        {
            $(this).parent().find(".updown a img").css("margin-top", "0px");
        }

        return false;

    });

    var ilangen = $(".isilanlari .parca").width();

    var ilanyuk = ilangen * 1.25;

    $(".isilanlari .parca").height(ilanyuk);
    $(".isilanlari .parca div:first-child").height(ilangen * 0.225);
    $(".isilanlari .parca div:last-child").height(ilangen * 0.6476);

    $(window).resize(function () {
        
        ilangen = $(".isilanlari .parca").width();

        ilanyuk = ilangen * 0.9;

        $(".isilanlari .parca").height(ilanyuk);
        $(".isilanlari .parca div:first-child").height(ilangen * 0.225);
        $(".isilanlari .parca div:last-child").height(ilangen * 0.6476);

    })

})