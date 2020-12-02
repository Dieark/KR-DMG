
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
var atkreduce={
        MaxK: 1000,
        X1: 500,
        A1: 2,
        B1: 1000,
        X2: 500,
        A2: 0,
        B2: 0,
        MinK: 0,
        X3: 0,
        A3: 0,
        B3: 0,
        X4: 0,
        A4: 0,
        B4: 0
}

var chartArray=[];
var critArray=[];
var accArray=[];
var ccaccArray=[];
var dodgeArray=[];
var critresistArray=[];
var ccresistArray=[];
var penArray=[];
var aspdArray=[];
var blockdefArray=[];
var mpatkArray=[];
var atkreduceArray=[];

//create chart x-axis
for (var i=0;i<=200;i++){
		chartArray.push(i*10);
	}

//create all chart data
chartArray.forEach(function(item, index, arr){
	critArray[index]=Number(real(crit,arr[index]));
	accArray[index]=Number(real(acc,arr[index]));
	ccaccArray[index]=Number(real(ccacc,arr[index]));
	dodgeArray[index]=Number(real(dodge,arr[index]));
	critresistArray[index]=Number(real(critresist,arr[index]));
	ccresistArray[index]=Number(real(ccresist,arr[index]));
	penArray[index]=Number(real(pen,arr[index]));
	aspdArray[index]=Number(real(aspd,arr[index]));
	blockdefArray[index]=Number(real(blockdef,arr[index]));
	mpatkArray[index]=Number(real(mpatk,arr[index]));
	atkreduceArray[index]=Number(real(atkreduce,arr[index]));
});

//create new chart
var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels:chartArray,
		datasets: [{
			label: '爆擊率',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			data: atkreduceArray,
			pointRadius: 1,
			fill:false
		}]
		
	},
	options: {
		aspectRatio:1,
		showLines:false,
		scales: {
			xAxes: [{
				ticks: {
					maxTicksLimit: 10
				}
			}],
			yAxes: [{
				ticks: {
					min:0
				}
			}]
		},
	}
});





$(document).ready(function(){
	tableloading();
	$(document).on("click",".clean",function(){
		$(this).parent().siblings("input").val("");
	});
	$(document).on("keyup",".data",calc);
	$(document).on("click",".data",calc);
	
	//screen-chart-match
	var screenWidth=window.matchMedia("(max-width:767px),(min-width:1870px)")
	screenWidth.addListener(function(){
		if(screenWidth.matches){ 
			$(".chart").removeClass("d-none").addClass("d-block");
		}else{
			$(".chart").removeClass("d-block").addClass("d-none");
		}
		});
	
	//
	$(document).on("click",".btn-chart",function(){
		$(this).siblings(".btn").removeClass("active");
		$(this).addClass("active");
		var x=$(this).attr("name");
		console.log(x)
		switch(x){
			case "critArray":
				x=critArray;
				break;
			case "accArray":
				x=accArray;
				break;
			case "ccaccArray":
				x=ccaccArray;
				break;
			case "critresistArray":
				x=critresistArray;
				break;
			case "ccresistArray":
				x=ccresistArray;
				break;
			case "dodgeArray":
				x=dodgeArray;
				break;
			case "penArray":
				x=penArray;
				break;
			case "aspdArray":
				x=aspdArray;
				break;
			case "blockdefArray":
				x=blockdefArray;
				break;
			case "mpatkArray":
				x=mpatkArray;
				break;
			case "atkreduceArray":
				x=atkreduceArray;
				break;
			default:
				x=critArray;
		}
		var y=$(this).text();
		console.log(y)
		chart.data.datasets[0].label=y;
		chart.data.datasets[0].data=x;
		chart.update();
		console.log("success")
	});
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
	$("td:eq(31)").text(atkreduce.X1);
}

var ivalue;
function calc(){
	ivalue=Number($(".input input").val());
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
	$("td:eq(32)").text(real(atkreduce)).append("%");
}

function real(stat,val){
	if(val>0){
		ivalue=val;
	}
	// var ivalue=Number($(".input input").val());
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




