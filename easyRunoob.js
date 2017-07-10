var href = document.location.href;
if(href.substr(0,25) !== "http://www.runoob.com/try"){
$("body").append("<div id = 'tryit'></div>");
$("#tryit").css({"position":"fixed","left":"0","right":"0",
"bottom":"0","background":"white","height":"300px"});
$("#tryit").css("z-index","10000");
$("#tryit").css("border","5px solid #96b97d");
$("#tryit").append("<div id = 'panelToggle'>收起</div>");
$("#panelToggle").css({
    "position":"absolute",
    "width":"4%",
    "height":"15px",
    "background":"white",
    "top":"-15px",
    "left":"46%",
    "border":"5px solid #96b97d",
    "border-radius":"43%",
    "text-align":"center",
    "cursor":"pointer",
    "font-weight":"bold"
});
$("#panelToggle").bind("click",function(){
    var text = $(this).text();
    if(text === "收起"){
    $("#tryit").animate({"bottom":"-305px"},"1000");
    $(this).text("展开");
    }else{
     $("#tryit").animate({"bottom":"0px"},"1000");
    $(this).text("收起");  
    }
})
$("#tryit").append("<div id = 'panelContent'></div>");
$("#panelContent").css("height","100%");
$(".tryitbtn").attr("onclick","return false");
$(".tryitbtn").bind("click",function(){
$("#panelContent").empty();
var href = $(this).attr("href");
var frame = "<iframe style ='height:100%;width:100%;' src =" + href + "></iframe>";
$("#panelContent").append(frame);
})
}
else{
    //$(".navbar").css("display","none");
    $(".navbar").remove();
    $(".container").css({"top":"0","position":"absolute"});
}

