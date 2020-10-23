

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
//dmgstat元素數量
var dmgstatlen=dmgstat.length;
//把所有input的資料存到這裡
const inputdata=document.getElementsByTagName("input");
//inputdataTAG數量
var inputdatalen=inputdata.length;
//把input資料存到dmgstat
function input2dmgstat(){
for (var i=0;i<dmgstatlen;i++){
    for (var j=0;j<inputdatalen;j++){
        if(dmgstat[i].name==inputdata[j].name)
        dmgstat[i].value=inputdata[j].value;
    }
}
}
//按下按鈕輸入面板攻擊
function changeinputatk1(){
document.getElementById("changeinputatk1").style.display="none";
document.getElementById("changeinputatk2").style.display="block";
document.getElementById("inputallpanel").style.display="none";
document.getElementById("inputpanelatk").style.display="block";
}
//按下按鈕輸入攻擊細項
function changeinputatk2(){
document.getElementById("changeinputatk1").style.display="block";
document.getElementById("changeinputatk2").style.display="none";
document.getElementById("inputallpanel").style.display="block";
document.getElementById("inputpanelatk").style.display="none";
}
//按下按鈕輸入魂武攻擊
function changeinputsw1(){
document.getElementById("changeinputsw1").style.display="none";
document.getElementById("changeinputsw2").style.display="block";
document.getElementById("inputallsw").style.display="none";
document.getElementById("inputswatk").style.display="block";
}
//按下按鈕輸入魂武細項
function changeinputsw2(){
document.getElementById("changeinputsw1").style.display="block";
document.getElementById("changeinputsw2").style.display="none";
document.getElementById("inputallsw").style.display="block";
document.getElementById("inputswatk").style.display="none";
}
//改變專武輸入模式
function changeuw(){
var x=document.getElementById("uwstar");
var y=document.getElementById("uwatk");
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
var x=document.getElementById("fixed");
var y=document.getElementById("gearset").value;
if ((y=="tmg")||(y=="tms")||(y=="tma")){
                x.style.display="block";
                }else{
                x.style.display="none";
                }
}
//改變耳環輸入模式
function changeer(){
var x=document.getElementById("erstar");
var y=document.getElementById("eratk");
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
if (document.getElementById("inputswlevel").style.display==="inline"){
    document.getElementById("swlevel").style.display="inline";
    document.getElementById("inputswlevel").style.display="none";
} else{
    document.getElementById("swlevel").style.display="none";
	document.getElementById("inputswlevel").style.display="inline";
}
}
//改變魂武比例輸入模式
function changeswrate(){
if (document.getElementById("inputswrate").style.display==="inline"){
    document.getElementById("swrate").style.display="inline";
    document.getElementById("inputswrate").style.display="none";
} else{
    document.getElementById("swrate").style.display="none";
	document.getElementById("inputswrate").style.display="inline";
}
}
//改變魂武附加攻擊輸入模式
function changeswaddi(){
if (document.getElementById("inputswaddi").style.display==="inline"){
    document.getElementById("swaddi").style.display="inline";
    document.getElementById("inputswaddi").style.display="none";
} else{
    document.getElementById("swaddi").style.display="none";
	document.getElementById("inputswaddi").style.display="inline";
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
//測試用
function test(){
var form=document.getElementById("heroform");
var herotype=form.herotype.value;
var uwstar=form.uwstar.value;
var erstar=form.erstar.value;
var uwatk=form.uwatk.value;
document.getElementById("demo1").innerHTML=herotype;
}

function dmgform(){
var text=
"<form name=\"form1\" id=\"form1\">"+
"<div id=\"atkperform1\">"+
"<div>專武攻擊：<input type=\"number\" name=\"uwatk\" id=\"uwatk\" style=\"width:70px;\" placeholder=\"147459\" /><br><br></div>"+
"<div>耳環攻擊：<input type=\"number\" name=\"earatk\" id=\"earatk\" style=\"width:70px;\" placeholder=\"46659\" /><br><br></div>"+
"<div>魂武攻擊：<input type=\"number\" name=\"swatk\" id=\"swatk\" style=\"width:70px;\" placeholder=\"200000\" /><br><br></div>"+
"<div>攻擊前綴：<input type=\"number\" name=\"preatk\" id=\"preatk\" style=\"width:50px;\" placeholder=\"1500000\" />%<br><br></div>"+
"<p1>確認面板攻擊是否正確</p1><br>"+
"<p1 id=\"panelatk\">面板攻擊= <b>--</b></p1><br><br>"+
"</div>"+
"<div id=\"atkperform2\" style=\"display:none\">"+
"面板攻擊：<input type=\"number\" name=\"panelatk\" id=\"panelatk\" style=\"width:100px;\" placeholder=\"1500000\"/><br><br>"+
"</div>"+
"<div>"+
"<button type=\"button\" onclick=\"changeatkperform()\">change</button>"+
"</div>"+
"攻擊後綴：<input type=\"number\" name=\"posatk\" id=\"posatk\" style=\"width:50px;\" placeholder=\"200\"/>%<br><br>"+
"技能倍率：<input type=\"number\" name=\"multi\" id=\"multi\" style=\"width:60px;\" placeholder=\"5.001\"/><br><br>"+
"基礎傷害：<input type=\"number\" name=\"base\" id=\"base\" style=\"width:70px;\" placeholder=\"100000\"/><br><br>"+
"爆擊傷害(%)：<input type=\"number\" name=\"cdmg\" id=\"cdmg\" style=\"width:50px;\" placeholder=\"192\"/>%<br><br>"+
"對敵增傷：<input type=\"number\" name=\"incdmg\" id=\"incdmg\" style=\"width:50px;\" placeholder=\"75\"/>%<br><br>"+
"敵人防禦：<input type=\"number\" name=\"enemydef\" id=\"enemydef\" style=\"width:70px;\" placeholder=\"280000\"/><br><br>"+
"技能書：<input type=\"number\" name=\"book\" id=\"book\" style=\"width:50px;\" placeholder=\"50\"/>%<br><br>"+
"狩獵：<input type=\"number\" name=\"hunt\" id=\"hunt\" style=\"width:50px;\" placeholder=\"10\"/>%<br><br>"+
"<input type=\"button\" name=\"submit\" value=\"送出\" onclick=\"test();\" />"+//onclick
"</form>"
;
document.getElementById("dmgform").innerHTML=text;
}




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


