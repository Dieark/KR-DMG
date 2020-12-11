var accSet={
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
var dodgeSet={
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
var penSet={
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
var blockDefSet={
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
var atkSet={
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

$(document).ready(function(){	
	$(document).on("keyup",".data",calc);
	$(document).on("click",".data",calc);
	function calc(){
        var hpBase=Number($(this).find("input:eq(0)").val());
        var hpB=Number($(this).find("input:eq(1)").val());
		var hpA=Number($(this).find("input:eq(2)").val());
        var hpF=Number($(this).find("input:eq(3)").val());
        var defBase=Number($(this).find("input:eq(4)").val());
        var defB=Number($(this).find("input:eq(5)").val());
        var defA=Number($(this).find("input:eq(6)").val());
		var defN=Number($(this).find("input:eq(7)").val());
		var pen=Number($(this).find("input:eq(8)").val());
        var tough=Number($(this).find("input:eq(9)").val());
        var dmgI=Number($(this).find("input:eq(10)").val());
		var atkD=Number($(this).find("input:eq(11)").val());
		var atkI=Number($(this).find("input:eq(12)").val());
        var block=Number($(this).find("input:eq(13)").val());
        var blockDef=Number($(this).find("input:eq(14)").val());
		var dodge=Number($(this).find("input:eq(15)").val());
		var acc=Number($(this).find("input:eq(16)").val());
        var dmgD1=Number($(this).find("input:eq(17)").val());
        var dmgD2=Number($(this).find("input:eq(18)").val());
		var dmgD3=Number($(this).find("input:eq(19)").val());
		var dmgD4=Number($(this).find("input:eq(20)").val());
        var dmgD5=Number($(this).find("input:eq(21)").val());
        
        var penR=Number(real(penSet,pen));
        var toughR=Number(real(penSet,tough));
        var atkDR=Number(real(atkSet,(atkD-atkI)*10));
        var blockR=Number(real(dodgeSet,block));
        var blockDefR=Number(real(blockDefSet,blockDef));
        var dodgeR=Number(real(dodgeSet,dodge));
        var accR=Number(real(accSet,acc));

        var atkR=(atkDR==0)?(atkD-atkI):atkDR;

        $(this).find(".full:eq(0)").text("實際防穿:"+penR);
        $(this).find(".full:eq(1)").text("實際抵抗:"+toughR);
        $(this).find(".full:eq(2)").text("實際降攻:"+atkR);
        $(this).find(".full:eq(3)").text("實際格擋率:"+blockR);
        $(this).find(".full:eq(4)").text("實際格擋防禦:"+blockDefR);
        $(this).find(".full:eq(5)").text("實際閃避率:"+dodgeR);
        $(this).find(".full:eq(6)").text("實際命中率:"+accR);

        var realDef=Math.floor(Math.floor(Math.floor(defBase*(100+defB)/100)*(100+defA)/100+defN)*(100-penR)/100);
        
        var defR=Math.round((980750*realDef)/(1000000-980750+realDef)/1000)/1000;

        var hp=Math.floor(Math.floor(Math.floor(hpBase*((100+hpB)*10/1000))*((100+hpA)*10/1000))*((100+hpF)*10/1000));
        var toughF=Math.round((100+dmgI-toughR)*10)/1000;
        var atkF=((Math.round((100-atkDR)*10)/1000)<1)?(Math.round((100-atkDR)*10)/1000):(Math.round((100+atkI-atkD)*10)/1000);
        var blockF=Math.round(((100-blockR)*10)+(blockR*(Math.round((100-50-blockDefR)*10)/1000)*10))/1000;
        var dodgeF=(((100+accR-dodgeR)/100)<1)?(Math.round((100+accR-dodgeR)*10)/1000):1;
        

        var dmgRT=Math.round(((1*hpBase/hp)*(1-defR)*toughF*atkF*blockF*dodgeF*((100-dmgD1)/100)*((100-dmgD2)/100)*((100-dmgD3)/100)*((100-dmgD4)/100)*((100-dmgD5)/100))*1000)/1000;

        $(this).find("[name='iHp']").text("入場生命="+hp);
        $(this).find("[name='iDef']").text("入場防禦="+realDef);
        $(this).find("[name='hp']").text("等效減傷="+Math.round((1-(hpBase/hp))*1000)/10+"%");
        $(this).find("[name='def']").text("等效減傷="+Math.round((defR)*1000)/10+"%");
        $(this).find("[name='tough']").text("等效減傷="+Math.round((1-toughF)*1000)/10+"%");
        $(this).find("[name='atk']").text("等效減傷="+Math.round((1-atkF)*1000)/10+"%");
        $(this).find("[name='block']").text("等效減傷="+Math.round((1-blockF)*1000)/10+"%");
        $(this).find("[name='dodge']").text("等效減傷="+Math.round((1-dodgeF)*1000)/10+"%");

        $("[name='dmgRT']").text("總減傷="+Math.round((1-dmgRT)*1000)/10+"%");
        $(".card p:eq(0)").text("生命-等效減傷="+Math.round((1-(hpBase/hp))*1000)/10+"%");
        $(".card p:eq(1)").text("防禦-等效減傷="+Math.round((defR)*1000)/10+"%");
        $(".card p:eq(2)").text("抵抗-等效減傷="+Math.round((1-toughF)*1000)/10+"%");
        $(".card p:eq(3)").text("攻擊-等效減傷="+Math.round((1-atkF)*1000)/10+"%");
        $(".card p:eq(4)").text("格擋-等效減傷="+Math.round((1-blockF)*1000)/10+"%");
        $(".card p:eq(5)").text("閃避-等效減傷="+Math.round((1-dodgeF)*1000)/10+"%");

        console.log("總減傷=",dmgRT)
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
		$(this).children().focus();
	});
	
	$(document).on("focusout",".edit",function(){
		var edited=$(this).children().val();
		if (edited!="")
		$(this).html(edited+'&#x00A0<i class="fas fa-edit fa-xs"></i>');
	});
	
	$(document).on("click",".tg",function(){
        $(this).siblings(".toggle").toggle();
        $(this).find("i").toggleClass("fa-plus");
		$(this).find("i").toggleClass("fa-minus");
    });
    
    var cX,cY,rX,rY,nX,nY;
    var move=0;
    $(document).on("mousedown",".card",function(event){
        move=1;
        cX=event.clientX;
        cY=event.clientY;
        rX=cX-parseInt(getComputedStyle(this).left);
        rY=cY-parseInt(getComputedStyle(this).top);
        console.log(cY,cX,rX,rY)
    });
    $(document).on("mousemove",".card",function(event){
        if (move){
            cX=event.clientX;
            cY=event.clientY;
            nX=cX-rX;
            nY=cY-rY;
            
            $(this).css("left",nX);
            $(this).css("top",nY);
            
            console.log(cY,cX,nX,nY)
        }
    });
    $(document).on("mouseup",".card",function(){
        move=0;
    });
    $(document).on("mouseout",".card",function(){
        move=0;
    });

});

function real(stat,val){
	var actual=0;
	if (val===0){
	actual=0;
	// 2nd upper softcap
	} else if (val > stat.X1){
	actual=attenuateInv(val,stat.MaxK,stat.A1,stat.B1);
	// 1st upper softcap
	} else if (val > stat.X2){
	actual=Math.floor((val * stat.A2) / 1000) + stat.B2;
	// 2nd lower softcap
	} else if (val < stat.X3){
	actual=attenuateInv(val,stat.MinK,stat.A3,stat.B3);
	// 1st lower softcap
	} else if (val < stat.X4){
	actual=attenuate(val, stat.MinK, stat.A4, stat.B4);
	// uncapped
	} else {
	actual=val;
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