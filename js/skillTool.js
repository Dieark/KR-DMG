$(document).ready(function(){
  $("input").keyup(function(){
	  var atk1=Number($("#input1 .form-control").val());
	  var dmg1=Number($("#input2 .form-control").val());
	  var atk2=Number($("#input3 .form-control").val());
	  var dmg2=Number($("#input4 .form-control").val());
	  var scale=Math.round(1000*(dmg1-dmg2)/(atk1-atk2))/1000;
	  var base=Math.ceil(dmg1-atk1*scale);
    $("#result1").text(base);
	$("#result2").text(scale);
  });
});
