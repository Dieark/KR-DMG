$(document).ready(function(){
    console.log("start")
    $("#S1-light").on("dblclick",function(){
        $("#S1-light").attr("src","..\\img\\T5暗.jpg")
    })
    $("#S1-light").on("dblclick",function(){
        var x=$("#S1-light").attr("src");
        console.log(x.replace(".jpg",".png"))
    })
    // btn
    $("#btn-panel").on("click",function(){
        $(".panel").show();
        $(".skill").hide();
        $(".gear").hide();
        $(".transcend").hide();
    })
    $("#btn-skill").on("click",function(){
        $(".panel").hide();
        $(".skill").show();
        $(".gear").hide();
        $(".transcend").hide();
    })
    $("#btn-gears").on("click",function(){
        $(".panel").hide();
        $(".skill").hide();
        $(".gear").show();
        $(".transcend").hide();
    })
    $("#btn-trans").on("click",function(){
        $(".panel").hide();
        $(".skill").hide();
        $(".gear").hide();
        $(".transcend").show();
    })
})