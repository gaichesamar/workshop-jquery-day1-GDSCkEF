// $ l'appel bibliothéque jQuery
//hide = cachée l'element
//toggle=hide+show 
//fadeToggle=fadein+fadeout
//slideToggle=slideUp+slideDown
$(document).ready(function () {
 /* $("#par2").hide();
    $("button").click(function () { 
        $("#par2").toggle();

    });*/


/*$("#par2").slideUp();(3000);
$("button").click(function () { 
    $("#par2").slideToggle();
})*/
$("p").hide();
$("button").click(function () { 
    $("#par1").show();
    });
    $("button").dblclick(function(){
        $("#par2").show();
    })

    $("h2").css({
        "color":"red",
        "fontSize":"20px",
        "fontFamily":"monospace"
    });
    $("p").css({
        "fontFamily":"serif",
        "width":"350px"
    })
    $("button").css({
        "color":"blue",
        "padding":"8px",
        "background":"black"
    })
   /* $("input").mouseenter(function () { 
        $(this).css("background","blue");
    });
    $("input").mouseleave(function () { 
        $(this).css("background","red"); 
    });*/
    $("input").on({
        mouseenter:function(){
            $(this).css("background","blue");
        },
        mouseleave:function(){
            $(this).css("background","red");  
        }
    })
    $("input").focus(function (e) { 
        $("#focus").show();
        
    });
    $("span").hide();
    $("input").blur(function (e) { 
        $("span").show();
        
    });
    /*$("div").animate({
        "width":"500px",
         },2000,function(){
            $("h1").show(3000);
         })*/
var div =$("div")
         div.slideUp(2000);
         div.slideDown(2000);
         div.fadeOut(2000);
         div.fadeIn(2000);

$("#class").click(function(){
    //$("div").addClass('container');
    //alert($("div").text())
    //alert($("div").html())
    //alert ($("input").val())
    alert($("a").att("class"))



})

});