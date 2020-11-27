
var crit={
	MaxK: 2000,
	X1: 2000,
	A1: 1,
	B1: 1500,
	X2: 1500,
	A2: 500,
	B2: 750,
	MinK: 0,
	X3: -500,
	A3: 0,
	B3: 0,
	X4: 0,
	A4: 0,
	B4: 0
}
var acc={
        MaxK: 2000,
        X1: 2000,
        A1: 1,
        B1: 1500,
        X2: 1500,
        A2: 500,
        B2: 750,
        MinK: -920,
        X3: -2,
        A3: 3,
        B3: -938,
        X4: 1,
        A4: 0,
        B4: 0
}
var ccacc={
        MaxK: 900,
        X1: 900,
        A1: 1000000,
        B1: 1000000,
        X2: 450,
        A2: 1000,
        B2: 0,
        MinK: 0,
        X3: -500,
        A3: 0,
        B3: 0,
        X4: 0,
        A4: 0,
        B4: 0
}
var dodge={
        MaxK: 1000,
        X1: 1000,
        A1: 3,
        B1: 0,
        X2: 500,
        A2: 500,
        B2: 250,
        MinK: 0,
        X3: -500,
        A3: 0,
        B3: 0,
        X4: 0,
        A4: 0,
        B4: 0
}
var critresist={
        MaxK: 1000,
        X1: 1000,
        A1: 3,
        B1: 0,
        X2: 500,
        A2: 500,
        B2: 250,
        MinK: 0,
        X3: -500,
        A3: 0,
        B3: 0,
        X4: 0,
        A4: 0,
        B4: 0
}
var ccresist={
        MaxK: 1000,
        X1: 1000,
        A1: 1000000,
        B1: 1000000,
        X2: 500,
        A2: 1000,
        B2: 0,
        MinK: 0,
        X3: -500,
        A3: 0,
        B3: 0,
        X4: 0,
        A4: 0,
        B4: 0
}
var pen={
        MaxK: 900,
        X1: 1000,
        A1: 2,
        B1: 1000,
        X2: 450,
        A2: 409,
        B2: 266,
        MinK: 0,
        X3: -500,
        A3: 0,
        B3: 0,
        X4: 0,
        A4: 0,
        B4: 0
}
var aspd={
        MaxK: 2500,
        X1: 2400,
        A1: 1,
        B1: -733,
        X2: 1600,
        A2: 500,
        B2: 800,
        MinK: 250,
        X3: -10000,
        A3: 0,
        B3: 0,
        X4: 500,
        A4: 1,
        B4: -1500
}
var blockdef={
        MaxK: 450,
        X1: 775,
        A1: 3,
        B1: 1500,
        X2: 225,
        A2: 204,
        B2: 179,
        MinK: -920,
        X3: -2,
        A3: 3,
        B3: -938,
        X4: -1,
        A4: 0,
        B4: 0
}
var mpatk={
        MaxK: 2300,
        X1: 2400,
        A1: 1,
        B1: -900,
        X2: 1200,
        A2: 500,
        B2: 600,
        MinK: 0,
        X3: -500,
        A3: 0,
        B3: 0,
        X4: 0,
        A4: 0,
        B4: 0
}
$(document).ready(function(){
	tableloading();
	$(document).on("click",".clean",function(){
		$(this).parent().siblings("input").val("");
	});
	$(document).on("keyup",".data",calc);
	$(document).on("click",".data",calc);
});

function tableloading(){
	$("td:eq(0)").text(crit.X2);
	$("td:eq(1)").text(crit.X1);
	$("td:eq(3)").text(acc.X2);
	$("td:eq(4)").text(acc.X1);
	$("td:eq(6)").text(ccacc.X2);
	$("td:eq(7)").text(ccacc.X1);
	$("td:eq(9)").text(critresist.X2);
	$("td:eq(10)").text(critresist.X1);
	$("td:eq(12)").text(ccresist.X2);
	$("td:eq(13)").text(ccresist.X1);
	$("td:eq(15)").text(dodge.X2);
	$("td:eq(16)").text(dodge.X1);
	$("td:eq(18)").text(pen.X2);
	$("td:eq(19)").text(pen.X1);
	$("td:eq(21)").text(aspd.X2);
	$("td:eq(22)").text(aspd.X1);
	$("td:eq(24)").text(blockdef.X2);
	$("td:eq(25)").text(blockdef.X1);
	$("td:eq(27)").text(mpatk.X2);
	$("td:eq(28)").text(mpatk.X1);
}

function calc(){
	$("td:eq(2)").text(real(crit)).append("%");
	$("td:eq(5)").text(real(acc)).append("%");
	$("td:eq(8)").text(real(ccacc)).append("%");
	$("td:eq(11)").text(real(critresist)).append("%");
	$("td:eq(14)").text(real(ccresist)).append("%");
	$("td:eq(17)").text(real(dodge)).append("%");
	$("td:eq(20)").text(real(pen)).append("%");
	$("td:eq(23)").text(real(aspd)).append("%");
	$("td:eq(26)").text(real(blockdef)).append("%");
	$("td:eq(29)").text(real(mpatk)).append("%");

}

function real(stat){

	var ivalue=Number($(".input input").val());
	var actual=0;
	if (ivalue===0){
	actual=0;
	// 2nd upper softcap
	} else if (ivalue > stat.X1){
	actual=attenuateInv(ivalue,stat.MaxK,stat.A1,stat.B1);
	// 1st upper softcap
	} else if (ivalue > stat.X2){
	actual=Math.floor((ivalue * stat.A2) / 1000) + stat.B2;
	// 2nd lower softcap
	} else if (ivalue < stat.X3){
	actual=attenuateInv(ivalue,stat.MinK,stat.A3,stat.B3);
	// 1st lower softcap
	} else if (ivalue < stat.X4){
	actual=attenuate(ivalue, stat.MinK, stat.A4, stat.B4);
	// uncapped
	} else {
	actual=ivalue;
	}
	// return to 1 significant decimal place
	actual=Math.round(actual)/10;
	if(isNaN(actual)){
		return (0).toFixed(1);
	}else{
	return actual.toFixed(1);
	}

}

function attenuate(x, k, a, b){
	return Math.floor((k * 1000000) / (a * x * x + b * x + 1000000));
}

function attenuateInv(x, k, a, b){
	return k - Math.floor((k * 1000000) / (a * x * x + b * x + 1000000));
}




