$(document).ready(function(){
	var content=$(".box").html();
	var order=1;
	$(document).on("click",".clean",function(){
		$(this).parent().siblings("input").val("");
	});
	$(document).on("click","#plus",function(){
		$(".box").after(content);
		for (var i=0;i<=order;i++){
		$("h3:eq("+i+")").text("技能"+(i+1));
		}
		order++;
	});
	$(document).on("keyup",".data",calc)
	$(document).on("click",".data",calc)
	function calc(){
		var atk1=Number($(this).find("input:eq(0)").val());
		var dmg1=Number($(this).find("input:eq(1)").val());
		var atk2=Number($(this).find("input:eq(2)").val());
		var dmg2=Number($(this).find("input:eq(3)").val());
		var scale=Math.round(1000*(dmg1-dmg2)/(atk1-atk2))/1000;
		var base=Math.ceil(dmg1-atk1*scale);
		$(this).find(".result1").text(base);
		$(this).find(".result2").text(scale);
	}
});
