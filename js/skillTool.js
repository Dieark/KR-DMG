$(document).ready(function(){
	var content=$(".box").html();
	var order=1;
	$(document).on("click","#plus",function(){
		$(content).insertBefore(".plus");
		$("h3:eq("+order+")").text("技能"+(order+1));
		order++;
	});
	
	$(document).on("keyup",".data",calc);
	$(document).on("click",".data",calc);
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
	
	$(document).on("click",".clean",function(){
		$(this).parent().siblings("input").val("");
	});
	
	$(document).on("click",".cleanall",function(){
		$(this).parent().parent().siblings().find("input").val("");
	});
	
	$(document).on("dblclick",".edit",function(){
		var oldname=$(this).text();
		$(this).html('<input type="text" class="form-control" value="'+oldname+'">');
	});
	
	$(document).on("focusout",".edit",function(){
		var edited=$(this).children().val();
		if (edited!="")
		$(this).html(edited+'&#x00A0<i class="fas fa-edit fa-xs"></i>');
	});
});
