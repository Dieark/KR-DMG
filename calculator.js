//職業基礎攻擊資料
var panelbasedata=[19792,22488,24688,27864,25416,29328,23216];
//取得職業基礎攻擊
var panelbase=19792;
//取得魂武細項
var swadv=0;
var swlevel=0;
var swrate=0;
var swaddi=0;
//顯示(取得)魂武攻擊結果
var swatk=0;
var swatk2=0;
//魂武等級資料
var swmulti=[1.00,1.03,1.06,1.09,1.12,1.16,1.24,1.32,1.42,1.52,1.62,1.82,2.04,2.28,2.55,2.86,3.43,4.12,4.95,5.94,7.13];
//魂武基礎攻擊
var swbase=[3500,4000,4500];

//取得專武攻擊結果
var uwatk=112763;
//取得專武星數
var uwstar=5;
//專武星數資料
var uwstardata=[
    [45106,49616,58637,72169,90210,112763],//騎士
    [51120,56231,66456,81791,102238,127798],//戰士
    [56209,61829,73071,89933,112416,140520],//刺客
    [63264,69589,82243,101221,126526,158157],//弓箭手
    [57712,63483,75026,92339,115423,144278],//機械工
    [58985,64882,76680,94374,117967,147459],//魔法師
    [58985,64882,76680,94374,117967,147459]//牧師
    ];
//取得耳環攻擊結果
var eratk=23702;
//取得耳環星數
var erstar=5;
//耳環星數資料
var erstardata=[
    [15801,17381,18961,20542,22122,23702],//T8
    [28440,29862,31284,32706,34128,35550],//TM未尋回
    [37327,39193,41060,42926,44793,46659]//TM尋回
    ];
//取得攻擊前綴結果
var preatk=1.00;
//顯示(取得)面板攻擊結果
var panelatk=0;
//取得攻擊後綴結果
var posatk=1.00;
//取得攻擊數值結果
var atkvalue=0;
//取得技能倍率結果
var multi=1.000;
//取得技能基值結果
var base=0;
//取得防禦減傷結果
var defdec=1.000;
//取得屬性增傷結果
var dmginc=1.00;
//取得總爆傷結果
var cdmg=2.00;
//取得技能增傷結果
var skillinc=1.50;
//取得狩獵結果
var hunt=1.1;


var dmgstat={
uwatk:100000,
earatk:30000,
swatk:100000,
panelatk:1500000,
preatk:100,
posatk:100,
numatk:100000,
multi:5.001,
base:100000,
book:50,
cdmg:200,
enemydef:140000,
reddef:50,
decdef:30000,
pen:450,
incdmg:100,
enemyinc:50,
bossinc:50,
mantiinc:28.8,
hunt:10,

}

var panelstat={
atk:0,
hp:0,
acc:0,
ccacc:0,
ccresist:0,
critresist:0,
pdef:0,
mdef:0,
crit:0,
cdmg:0,
pen:0,
pblock:0,
mblock:0,
ptough:0,
mtough:0,
pdodge:0,
mdodge:0,
heal:0,
mpatk:0,
mpsec:0,
lifesteal:0,
aspd:0,
pblockdef:0,
mblockdef:0
}
var finalstat={
atk:panelstat.atk,
hp:panelstat.hp,
acc:0,
ccacc:0,
ccresist:0,
critresist:0,
pdef:0,
mdef:0,
crit:0,
cdmg:0,
pen:0,
pblock:0,
mblock:0,
ptough:0,
mtough:0,
pdodge:0,
mdodge:0,
heal:0,
mpatk:0,
mpsec:0,
lifesteal:0,
aspd:0,
pblockdef:0,
mblockdef:0
}

//把input資料存到dmgstat
function input2dmgstat(){
//dmgstat元素數量
var dmgstatlen=dmgstat.length;
//把所有input的資料存到這裡
const inputdata=document.getElementsByTagName("input");
//inputdataTAG數量
var inputdatalen=inputdata.length;
for (var i=0;i<dmgstatlen;i++){
    for (var j=0;j<inputdatalen;j++){
        if(dmgstat[i].name==inputdata[j].name)
        dmgstat[i].value=inputdata[j].value;
    }
}//end for
}//end function

//隱藏未完成部分
function hideundefined(){
document.getElementById("changepreatk1").style.display="none";
document.getElementById("changepreatk2").style.display="none";
document.getElementById("changeposatk1").style.display="none";
document.getElementById("changeposatk2").style.display="none";
document.getElementById("changeatkvalue1").style.display="none";
document.getElementById("changeatkvalue2").style.display="none";
document.getElementById("changemulti1").style.display="none";
document.getElementById("changemulti2").style.display="none";
document.getElementById("changebase1").style.display="none";
document.getElementById("changebase2").style.display="none";
document.getElementById("changeenemydef1").style.display="none";
document.getElementById("changeenemydef2").style.display="none";
document.getElementById("changedmginc1").style.display="none";
document.getElementById("changedmginc2").style.display="none";
document.getElementById("changecdmg1").style.display="none";
document.getElementById("changecdmg2").style.display="none";
document.getElementById("changeskillinc1").style.display="none";
document.getElementById("changeskillinc2").style.display="none";
}//end function
//test
function showinput(){
const selectdata=document.forms[0];
document.getElementById("demo").innerHTML="";
for (var i=0;i<selectdata.length;i++){
if (selectdata.elements[i].value!=="")
document.getElementById("demo").innerHTML+=selectdata.elements[i].id+":"+selectdata.elements[i].value+"<br>";
}//end for
}//end function
//按下按鈕輸入面板攻擊
function changepanel1(){
document.getElementById("changepanel1").style.display="none";
document.getElementById("changepanel2").style.display="block";
document.getElementById("allpaneldiv").style.display="none";
document.getElementById("paneldiv").style.display="block";
}
//按下按鈕輸入攻擊細項
function changepanel2(){
document.getElementById("changepanel1").style.display="block";
document.getElementById("changepanel2").style.display="none";
document.getElementById("allpaneldiv").style.display="block";
document.getElementById("paneldiv").style.display="none";
}
//按下按鈕輸入魂武攻擊
function changesw1(){
document.getElementById("changesw1").style.display="none";
document.getElementById("changesw2").style.display="block";
document.getElementById("allswdiv").style.display="none";
document.getElementById("swdiv").style.display="block";
getswatk1();
}
//按下按鈕輸入魂武細項
function changesw2(){
document.getElementById("changesw1").style.display="block";
document.getElementById("changesw2").style.display="none";
document.getElementById("allswdiv").style.display="block";
document.getElementById("swdiv").style.display="none";
getswatk2();
}
//按下按鈕輸入攻擊前綴
function changepreatk1(){
document.getElementById("changepreatk1").style.display="none";
document.getElementById("changepreatk2").style.display="block";
document.getElementById("inputallpreatkdiv").style.display="none";
document.getElementById("inputpreatkdiv").style.display="block";
}
//按下按鈕輸入攻擊前綴細項
function changepreatk2(){
document.getElementById("changepreatk1").style.display="block";
document.getElementById("changepreatk2").style.display="none";
document.getElementById("inputallpreatkdiv").style.display="block";
document.getElementById("inputpreatkdiv").style.display="none";
}
//按下按鈕輸入攻擊後綴
function changeposatk1(){
document.getElementById("changeposatk1").style.display="none";
document.getElementById("changeposatk2").style.display="block";
document.getElementById("inputallposatkdiv").style.display="none";
document.getElementById("inputposatkdiv").style.display="block";
}
//按下按鈕輸入攻擊後綴細項
function changeposatk2(){
document.getElementById("changeposatk1").style.display="block";
document.getElementById("changeposatk2").style.display="none";
document.getElementById("inputallposatkdiv").style.display="block";
document.getElementById("inputposatkdiv").style.display="none";
}

//改變專武輸入模式
function changeuw(){
var x=document.getElementById("uwstardiv");
var y=document.getElementById("uwatkdiv");
if (y.style.display==="inline"){
    x.style.display="inline";
    y.style.display="none";
} else{
    x.style.display="none";
    y.style.display="inline";
}
}
//展示尋回選項
function showfixed(){
var x=document.getElementById("fixeddiv");
var y=document.getElementById("gearset").value;
var z=document.getElementById("gearsetdiv");
if (y>1000){
    x.style.display="block";
    }else{
    x.style.display="none";
    }
}
//改變耳環輸入模式
function changeer(){
var x=document.getElementById("erstardiv");
var y=document.getElementById("eratkdiv");
if (y.style.display==="inline"){
    x.style.display="inline";
    y.style.display="none";
} else{
    x.style.display="none";
    y.style.display="inline";
}
}
//取得魂武攻擊
function getswatk1(){
swatk=Number(document.forms[0].swatk.value);
getpanelatk();
}

//取得專武攻擊
function getuwatk1(){
uwatk=Number(document.forms[0].uwatk.value);
getpanelatk();
}

//取得職業相關魂武專武攻擊
function getatk2(){
uwstar=Number(document.forms[0].uwstar.value);
swadv=Number(document.forms[0].swadv.value);
swlevel=Number(document.forms[0].swlevel.value);
swrate=Number(document.forms[0].swrate.value);
swaddi=Number(document.forms[0].swaddi.value);
switch (document.forms[0].herotype.value){
case "knight":
uwatk=uwstardata[0][uwstar];
swatk=Math.floor(swbase[0]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
panelbase=panelbasedata[0];
break;
case "warrior":
uwatk=uwstardata[1][uwstar];
swatk=Math.floor(swbase[1]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
panelbase=panelbasedata[1];
break;
case "assassin":
uwatk=uwstardata[2][uwstar];
swatk=Math.floor(swbase[1]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
panelbase=panelbasedata[2];
break;
case "archer":
uwatk=uwstardata[3][uwstar];
swatk=Math.floor(swbase[2]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
panelbase=panelbasedata[3];
break;
case "mechanic":
uwatk=uwstardata[4][uwstar];
swatk=Math.floor(swbase[2]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
panelbase=panelbasedata[4];
break;
case "wizard":
uwatk=uwstardata[5][uwstar];
swatk=Math.floor(swbase[2]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
panelbase=panelbasedata[5];
break;
case "priest":
uwatk=uwstardata[6][uwstar];
swatk=Math.floor(swbase[2]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
panelbase=panelbasedata[6];
break;
default:
uwatk=0;
swatk=0;
swatk2=0;
}//end switch
document.getElementById("swdetail").innerHTML="魂武攻擊：<span>"+swatk+"</span>+<span style=\"color:orange;\">"+swatk2+"</span>";
getpanelatk();
}//end function


//取得耳環攻擊
function geteratk1(){
eratk=Number(document.forms[0].eratk.value);
getpanelatk();
}
function geteratk2(){
erstar=Number(document.forms[0].erstar.value);
if(document.forms[0].gearset.value<1000){
eratk=erstardata[0][erstar];
}else if(document.forms[0].fixed.value==0){
eratk=erstardata[1][erstar];
}else{
eratk=erstardata[2][erstar];
} //end if
getpanelatk();
}//end function

function getpreatk1(){
preatk=(Number(document.forms[0].preatk.value)+100)/100;
getpanelatk();
}

function getpreatk2(){
getpanelatk();
}

function getpanelatk(){
panelatk=Math.floor((panelbase+uwatk+swatk+eratk)*preatk);
document.getElementById("paneldetail").innerHTML="面板攻擊：<span>"+panelatk+"</span>";
}

































