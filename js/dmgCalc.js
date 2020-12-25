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
    var ids=[];
    $("*").each(function(){
        if(this.id != "")
            ids.push(this.id);
    });
    var idsLen=ids.length;
    console.log("ids=",ids,"len=",idsLen)
    for(var i=0;i<idsLen;i++){
        eval("var " + ids[i].toString() + "=" + Number(0) + ";");
    }
    
	$(document).on("keyup",".data",calc);
    $(document).on("click",".data",calc);

    // =======計算=======
	function calc(event){
        for(var i=0;i<idsLen;i++){
            eval(ids[i].toString() + "=Number(" + "$('#" + ids[i] + "').val()" + ");");
            // eval("console.log('" + ids[i].toString() + "='+$('#" + ids[i] + "').val())");
        }
        if((event.target.id=="skillBook")||(event.target.id=="skillUT")||(event.target.id=="skillTrans")){
            $("#skillInc").val(Number($("#skillBook").val())+Number($("#skillUT").val())+Number($("#skillTrans").val()));
        }
        $("#defPenReal").text("實際防穿="+pen()+"%");
        $("#defDmgRedReal").text("等效減傷="+defDmg()+"%");
        $("#incToughReal").text("實際抵抗="+Number(real(penSet,incTough))+"%");
        $("#incIncReal").text("等效增傷="+inc()+"%");
        $("#result").text(realDmg());
        console.log("id=",event.target.id.toString(),"value=",$(event.target).val())
        console.log("realDmg=",realDmg())
	}
    // =======清空=======
	$(document).on("click",".clean",function(){
		$(this).parent().siblings("input").val("");
	});
	
	$(document).on("click",".cleanall",function(){
		$(this).parent().parent().siblings().find("input").val("");
	});
    // ====名稱自定義====
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
    // =======收合=======
	$(document).on("click",".tg",function(){
        $(this).siblings(".toggle").toggle();
        $(this).find("i").toggleClass("fa-plus");
		$(this).find("i").toggleClass("fa-minus");
    });
    // =====防禦後綴=====
    function def(){
        if(defDec-defPos>50)
        return -Number(real(atkSet,(defDec-defPos)*10));
        else
        return defPos-defDec;
    }
    // =====有效防禦=====
    function realDef(){
        var a=Math.floor(Math.floor(Math.floor(defBase*(Math.round((1+0.01*defPre)*1000)/1000))*(Math.round((1+0.01*def())*1000)/1000)+defVal)*(Math.round((1-0.01*pen())*1000)/1000));
        if(a<0) return 0;
        return a;
    }
    // =====防禦減傷=====
    function defDmg(){
        var c=980736;
        return Math.round((c*realDef())/(1000000-c+realDef())/1000)/1000;
    }
    // =====防穿等效=====
    function pen(){
        return Math.round(Number(real(penSet,defPen))*10)/10;
    }
    // =====增傷等效=====
    function inc(){
        return Math.round((incInc-Number(real(penSet,incTough)))*10)/10;
    }
    // ======總爆傷======
    function cdmg(){
        if($("#checkCdmg").prop('checked'))
            return Math.round((cdmg1+cdmg2+cdmg3+cdmg4+cdmg5)*10)/10;
        return -100;
    }
    // =======魔導=======
    // ======tm對敵======
    function tmAll(){
        var a=0;
        if(TMset==1) a+=10;
        if(TMset==2) a+=25;
        if(TMskill1==1) a+=25;
        if(TMskill2==1) a+=25;
        if(TMskill3==1) a+=25;
        if(TMskill4==1) a+=25;
        if(TMskill1==2) a+=36;
        if(TMskill2==2) a+=36;
        if(TMskill3==2) a+=36;
        if(TMskill4==2) a+=36;
        if(TMteammates>0) a+=TMteammates;
        return a;
    }
    // ======tm普攻======
    function tmNdmg(){
        var b=0;
        if(TMskill1==3) b+=25;
        if(TMskill2==3) b+=25;
        if(TMskill3==3) b+=25;
        if(TMskill4==3) b+=25;
        return b;
    }
    // ======tmDot======
    function tmDot(){
        var c=0;
        if(TMskill1==4) c+=20;
        if(TMskill2==4) c+=20;
        if(TMskill3==4) c+=20;
        if(TMskill4==4) c+=20;
        return c;
    }
    // ====tm無視防禦====
    function tmDef(){
        var d=0;
        if(TMskill1==5) d+=25;
        if(TMskill2==5) d+=25;
        if(TMskill3==5) d+=25;
        if(TMskill4==5) d+=25;
        return d;
    }
    // =======狩獵=======
    function hunt(){
        if($("#checkHunt").prop('checked')) return 10;
        return 0;
    }
    // ======魔獸套1======
    function mtSet1(){
        if(MTset!=0) return 12;
        return 0;
    }
    // ======魔獸套2======
    function mtSet2(){
        if(MTset==2) return 15;
        return 0;
    }
    // ======Boss傷1======
    function fdmg1(){
        if($("#checkBdmg1").prop('checked')) return bdmg1;
        return 0;
    }
    // ======Boss傷1======
    function fdmg2(){
        if($("#checkBdmg2").prop('checked')) return bdmg2;
        return 0;
    }
    // ======Boss傷1======
    function fdmg3(){
        if($("#checkBdmg3").prop('checked')) return bdmg3;
        return 0;
    }
    // ======Boss傷1======
    function fdmg4(){
        if($("#checkBdmg4").prop('checked')) return bdmg4;
        return 0;
    }
    // ======Boss傷1======
    function fdmg5(){
        if($("#checkBdmg5").prop('checked')) return bdmg5;
        return 0;
    }
    // =====實際傷害=====
    function realDmg(){
        var atk1=atkBase;
        var atk2=Math.floor(atk1)*(Math.round((1+0.01*atkPre)*1000)/1000);
        var atk3=Math.floor(atk2)*(Math.round((1+0.01*atkPetPre)*1000)/1000);
        var atk4=Math.floor(atk3)+atkPetVal;
        var atk5=Math.floor(atk4)*(Math.round((1+0.01*atkPetPos)*1000)/1000);
        var atk6=Math.floor(atk5)*(Math.round((1+0.01*atkPos)*1000)/1000);
        var atk7=Math.floor(atk6)+atkVal;
        var skill1=Math.floor(atk6)*skillScaling;
        var skill2=Math.floor(skill1)+skillBase;
        var def1=Math.floor(skill2)*(Math.round((1-defDmg())*1000)/1000);
        var inc1=Math.floor(def1)*(Math.round((1+0.01*inc())*1000)/1000);
        var cdmg1=Math.floor(inc1)*(Math.round((2+0.01*cdmg())*1000)/1000);
        var skill3=Math.floor(cdmg1)*(Math.round((1+0.01*skillInc)*1000)/1000);
        var hunt1=Math.floor(skill3)*(Math.round((1+0.01*hunt())*1000)/1000);
        var mt1=Math.floor(hunt1)*(Math.round((1+0.01*mtSet1())*1000)/1000);
        var mt2=Math.floor(mt1)*(Math.round((1+0.01*mtSet2())*1000)/1000);
        var tm1=Math.floor(mt2)*(Math.round((1+0.01*tmAll())*1000)/1000);
        var tm2=Math.floor(tm1)*(Math.round((1+0.01*tmNdmg())*1000)/1000);
        var tm3=Math.floor(tm2)*(Math.round((1+0.01*tmDot())*1000)/1000);
        var tm4=Math.floor(tm3)*(Math.round((1+0.01*tmDef())*1000)/1000);
        var bdmg1=Math.floor(tm4)*(Math.round((1+0.01*fdmg1())*1000)/1000)
        var bdmg2=Math.floor(bdmg1)*(Math.round((1+0.01*fdmg2())*1000)/1000)
        var bdmg3=Math.floor(bdmg2)*(Math.round((1+0.01*fdmg3())*1000)/1000)
        var bdmg4=Math.floor(bdmg3)*(Math.round((1+0.01*fdmg4())*1000)/1000)
        var bdmg5=Math.floor(bdmg4)*(Math.round((1+0.01*fdmg5())*1000)/1000)
        return Math.floor(bdmg5);
    }
});



// =======遞減=======
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
// ==================