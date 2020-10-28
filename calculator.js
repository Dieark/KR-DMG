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
var uwatk=0;
//專武星數資料
var uwstar=[];
//取得耳環攻擊結果
var eratk=0;
//耳環星數資料
var erstar=[];
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
if (selectdata.elements[i].value!="")
document.getElementById("demo").innerHTML+=selectdata.elements[i].id+":"+selectdata.elements[i].value+"<br>";
document.getElementById("demo").innerHTML=swatk+"+"+swatk2;
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
//改變魂武等級輸入模式
function changeswlevel(){
if (document.getElementById("swleveldiv").style.display==="inline"){
    document.getElementById("swleveldiv").style.display="inline";
    document.getElementById("swleveldiv").style.display="none";
} else{
    document.getElementById("swleveldiv").style.display="none";
	document.getElementById("swleveldiv").style.display="inline";
}
}
//改變魂武比例輸入模式
function changeswrate(){
if (document.getElementById("swratediv").style.display==="inline"){
    document.getElementById("swratediv").style.display="inline";
    document.getElementById("swratediv").style.display="none";
} else{
    document.getElementById("swratediv").style.display="none";
	document.getElementById("swratediv").style.display="inline";
}
}
//改變魂武附加攻擊輸入模式
function changeswaddi(){
if (document.getElementById("swaddidiv").style.display==="inline"){
    document.getElementById("swaddidiv").style.display="inline";
    document.getElementById("swaddidiv").style.display="none";
} else{
    document.getElementById("swaddidiv").style.display="none";
	document.getElementById("swaddidiv").style.display="inline";
}
}
//展示魂武等級
function showswlevel(){
document.getElementById("showswlevel").innerHTML=document.getElementById("heroform").swlevel.value;
}
//展示魂武比例
function showswrate(){
document.getElementById("showswrate").innerHTML=document.getElementById("heroform").swrate.value;
}
//展示魂武附加
function showswaddi(){
document.getElementById("showswaddi").innerHTML=document.getElementById("heroform").swaddi.value;
}
function getswatk1(){
swatk=Number(document.forms[0].swatk.value);
}
function getswatk2(){
swadv=Number(document.forms[0].swadv.value);
swlevel=Number(document.forms[0].swlevel.value);
swrate=Number(document.forms[0].swrate.value);
swaddi=Number(document.forms[0].swaddi.value);
switch (document.forms[0].herotype.value){
case "knight":
swatk=Math.floor(swbase[0]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
break;
case "warrior":
swatk=Math.floor(swbase[1]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
break;
case "assassin":
swatk=Math.floor(swbase[1]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
break;
case "archer":
swatk=Math.floor(swbase[2]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
break;
case "mechanic":
swatk=Math.floor(swbase[2]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
break;
case "wizard":
swatk=Math.floor(swbase[2]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
break;
case "priest":
swatk=Math.floor(swbase[2]*(2**swadv)*swmulti[swlevel]*(0.02*swrate),0);
swatk2=Math.floor(swatk*swaddi*0.01,0);
break;
default:
swatk=0;
swatk2=0;
}//end switch
document.getElementById("swdetail").innerHTML="魂武攻擊：<span>"+swatk+"</span>+<span style=\"color:orange;\">"+swatk2+"</span>";
}//end function

/*
function returnatk() {
var uwatk = document.getElementById("uwatk").value;
var earatk = document.getElementById("earatk").value;
var swatk = document.getElementById("swatk").value; 
var atk2 = document.getElementById("atk2").value;
document.getElementById("penalatk").innerHTML="面板攻擊="+Math.floor((Number(uwatk)+Number(earatk)+Number(swatk))*(1+0.01*Number(atk2)));
}

function calculate() {
var atk1 = document.getElementById("atk1").value;
var atk2 = document.getElementById("atk2").value;
var atk3 = document.getElementById("atk3").value;
var skill1 = document.getElementById("skill1").value;//技能傷害倍率
var skill2 = document.getElementById("skill2").value;//技能基礎傷害
var skill3 = document.getElementById("skill3").value;//技能書
var cdmg = document.getElementById("cdmg").value;
var enemydef = document.getElementById("enemydef").value;
var incdmg = document.getElementById("incdmg").value;
var hunt = document.getElementById("hunt").value;

document.getElementById("demo").innerHTML=Math.round((atk1*(1+0.01*atk2)*(1+0.01*atk3)*(1+skill1)+Number(skill2))*(1+0.01*skill3)*(2+0.01*cdmg)*(1+0.01*incdmg)*(1+0.01*hunt));
document.getElementById("demo1").innerHTML=returnatk();
}

*/
