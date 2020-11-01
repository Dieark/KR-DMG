var panel={
mode:0,//輸入模式 0：輸入 1：細項
atk:0,//顯示(取得)面板攻擊結果
basedata:[19792,22488,24688,27864,25416,29328,23216],//職業基礎攻擊資料
base:19792,//取得職業基礎攻擊
}

var sw={
mode:0,//輸入模式 0：輸入 1：細項
//取得細項
adv:2,//階級
level:20,//等級
rate:70,//比例
addi:20,//附加攻擊
//顯示(取得)魂武攻擊結果
atk:0,//總攻擊
atk1:0,//攻擊前項
atk2:0,//攻擊後項
//等級倍率資料
scaling:[1.00,1.03,1.06,1.09,1.12,
         1.16,1.24,1.32,1.42,1.52,
         1.62,1.82,2.04,2.28,2.55,
         2.86,3.43,4.12,4.95,5.94,7.13],
//基礎攻擊資料
base:[3500,4000,4500],
}

var uw={
mode:1,//輸入模式 0：輸入 1：選單
atk:112763,//取得專武攻擊結果
star:5,//取得星數
//職業-星數-攻擊資料
stardata:[
    [45106,49616,58637,72169,90210,112763],//騎士
    [51120,56231,66456,81791,102238,127798],//戰士
    [56209,61829,73071,89933,112416,140520],//刺客
    [63264,69589,82243,101221,126526,158157],//弓箭手
    [57712,63483,75026,92339,115423,144278],//機械工
    [58985,64882,76680,94374,117967,147459],//魔法師
    [58985,64882,76680,94374,117967,147459]//牧師
    ],
}

var er={
mode:1,//輸入模式 0：輸入 1：選單
atk:23702,//取得耳環攻擊結果
star:5,//取得耳環星數
//耳環星數資料
stardata:[
    [15801,17381,18961,20542,22122,23702],//T8
    [28440,29862,31284,32706,34128,35550],//TM未尋回
    [37327,39193,41060,42926,44793,46659]//TM尋回
    ],
}

var preatk={
mode:0,//輸入模式 0：輸入 1：細項
mul:1.00,//取得攻擊前綴結果
}

var posatk={
mode:0,//輸入模式 0：輸入 1：細項
mul:1.00,//取得攻擊後綴結果
}

var defred={
x:0,
max:1000,
x1:1000,
a1:3,
b1:0,
x2:500,
a2:500,
b2:250,
real:function(){return Math.floor(softcap(this.x,this.max,this.x1,this.a1,this.b1,this.x2,this.a2,this.b2))/10;},
}

var pen={
x:0,
max:900,
x1:1000,
a1:2,
b1:1000,
x2:450,
a2:409,
b2:266,
real:function(){return Math.floor(softcap(this.x,this.max,this.x1,this.a1,this.b1,this.x2,this.a2,this.b2))/10;},
}

var def={
base:980750,//防禦減傷係數
enemy:0,//敵人防禦
red:function(){return defred.real();},//扣防％
dec:0,//扣防值
pen:function(){return pen.real();},//防穿值遞減結果
real:function(){return (Math.floor(Math.floor(this.enemy*(100-this.red())/100-this.dec)*(100-this.pen())/100)>0)?Math.floor(Math.floor(this.enemy*(100-this.red())/100-this.dec)*(100-this.pen())/100):0;},//有效防禦
mul:function(){return Math.round(this.base*this.real()/(1000000-this.base+this.real())/1000)/1000;},//防禦減傷倍率
graph1:{
	real:function(){return (Math.floor(def.enemy*1))>0?(Math.floor(def.enemy*1)):0;},//有效防禦
	mul:function(){return Math.round(def.base*this.real()/(1000000-def.base+this.real())/1000)/1000;},//防禦減傷倍率
},
graph2:{
	real:function(){return (Math.floor(def.enemy*(100-def.red())/100))>0?(Math.floor(def.enemy*(100-def.red())/100)):0;},//有效防禦
	mul:function(){return Math.round(def.base*this.real()/(1000000-def.base+this.real())/1000)/1000;},//防禦減傷倍率
},
graph3:{
	real:function(){return (Math.floor(def.enemy*1-def.dec))>0?(Math.floor(def.enemy*1-def.dec)):0;},//有效防禦
	mul:function(){return Math.round(def.base*this.real()/(1000000-def.base+this.real())/1000)/1000;},//防禦減傷倍率
},
graph4:{
	real:function(){return (Math.floor(def.enemy*(100-def.pen())/100))>0?(Math.floor(def.enemy*(100-def.pen())/100)):0;},//有效防禦
	mul:function(){return Math.round(def.base*this.real()/(1000000-def.base+this.real())/1000)/1000;},//防禦減傷倍率
},
}

var tough=pen;


















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



/*
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
*/

//確定
function showinput(){
const selectdata=document.forms[0];
document.getElementById("de.mo").innerHTML="";
for (var i=0;i<selectdata.length;i++){
if (selectdata.elements[i].value!=="")
document.getElementById("de.mo").innerHTML+=selectdata.elements[i].id+"："+selectdata.elements[i].value+"<br>";
}//end for
document.getElementById("de.mo").innerHTML=def.mul();

console.log(def.graph1.mul());

var ctx = document.getElementById("chart").getContext("2d");
var chart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
        labels: ["防禦", "防禦+扣防%", "防禦+扣防值", "防禦+防穿", "全部套用"],
        datasets: [{
            label: "防禦減傷後剩下傷害(1-防禦減傷倍率)",
            data: [1-def.graph1.mul(),1-def.graph2.mul(),1-def.graph3.mul(),1-def.graph4.mul(),1-def.mul()],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)"
            ],
            borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)"
            ],
            borderWidth: 1
        }]
    },
	options: {
            scales: {
                xAxes: [{
                    ticks: {
                        min:0,
                        //max:1,						
                    }
                  }]
               }
            }
});
}//end function

//改變面板輸入模式
function changepanel(){
var x=document.getElementById("allpaneldiv");
var y=document.getElementById("paneldiv");
var z=document.getElementById("panelbutton");
if (y.style.display==="block"){
    x.style.display="block";
    y.style.display="none";
    z.value="填寫面板攻擊";
    panel.mode=1;
} else{
    x.style.display="none";
    y.style.display="block";
    z.value="填寫面板細項";
    panel.mode=0;
}
getatk();
}

//改變魂武輸入模式
function changesw(){
var x=document.getElementById("allswdiv");
var y=document.getElementById("swdiv");
var z=document.getElementById("swbutton");
if (y.style.display==="block"){
    x.style.display="block";
    y.style.display="none";
    z.value="填寫魂武攻擊";
    sw.mode=1;
} else{
    x.style.display="none";
    y.style.display="block";
    z.value="填寫魂武細項";
    sw.mode=0;
}
getatk();
}

//改變前綴輸入模式
function changepreatk(){
var x=document.getElementById("allpreatkdiv");
var y=document.getElementById("preatkdiv");
var z=document.getElementById("preatkbutton");
if (y.style.display==="block"){
    x.style.display="block";
    y.style.display="none";
    z.value="填寫攻擊前綴";
    preatk.mode=1;
} else{
    x.style.display="none";
    y.style.display="block";
    z.value="填寫攻擊前綴細項";
    preatk.mode=0;
}
getatk();
}

//改變後綴輸入模式
function changeposatk(){
var x=document.getElementById("allposatkdiv");
var y=document.getElementById("posatkdiv");
var z=document.getElementById("posatkbutton");
if (y.style.display==="block"){
    x.style.display="block";
    y.style.display="none";
    z.value="填寫攻擊後綴";
    posatk.mode=1;
} else{
    x.style.display="none";
    y.style.display="block";
    z.value="填寫攻擊後綴細項";
    posatk.mode=0;
}
getatk();
}

//改變專武輸入模式
function changeuw(){
var x=document.getElementById("uwstardiv");
var y=document.getElementById("uwatkdiv");
if (y.style.display==="inline"){
    x.style.display="inline";
    y.style.display="none";
    uw.mode=1;
} else{
    x.style.display="none";
    y.style.display="inline";
    uw.mode=0;
}
getatk();
}

//改變耳環輸入模式
function changeer(){
var x=document.getElementById("erstardiv");
var y=document.getElementById("eratkdiv");
var z=document.getElementById("erqualitydiv");
if (y.style.display==="inline"){
    x.style.display="inline";
    y.style.display="none";
    z.style.display="inline";
    er.mode=1;
} else{
    x.style.display="none";
    y.style.display="inline";
    z.style.display="none";
    er.mode=0;
}
getatk();
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


//取得職業相關魂武專武攻擊
function getatk(){
var uwstar_obj=document.getElementById("uwstar");
var swadv_obj=document.getElementById("swadv");
var swlevel_obj=document.getElementById("swlevel");
var swrate_obj=document.getElementById("swrate");
var swaddi_obj=document.getElementById("swaddi");
var erstar_obj=document.getElementById("erstar");
swlevel_obj.value=range(swlevel_obj.value,0,20);
swrate_obj.value=range(swrate_obj.value,0,70);
swaddi_obj.value=range(swaddi_obj.value,0,20);
uw.star=Number(uwstar_obj.value);
sw.adv=Number(swadv_obj.value);
sw.level=Number(swlevel_obj.value);
sw.rate=Number(swrate_obj.value);
sw.addi=Number(swaddi_obj.value);
er.star=Number(erstar_obj.value);

switch (document.forms[0].herotype.value){

case "knight":
uw.atk=uw.stardata[0][uw.star];
sw.atk1=Math.floor(sw.base[0]*(2**sw.adv)*sw.scaling[sw.level]*(0.02*sw.rate),0);
sw.atk2=Math.floor(sw.atk1*sw.addi*0.01,0);
panel.base=panel.basedata[0];
break;

case "warrior":
uw.atk=uw.stardata[1][uw.star];
sw.atk1=Math.floor(sw.base[1]*(2**sw.adv)*sw.scaling[sw.level]*(0.02*sw.rate),0);
sw.atk2=Math.floor(sw.atk1*sw.addi*0.01,0);
panel.base=panel.basedata[1];
break;

case "assassin":
uw.atk=uw.stardata[2][uw.star];
sw.atk1=Math.floor(sw.base[1]*(2**sw.adv)*sw.scaling[sw.level]*(0.02*sw.rate),0);
sw.atk2=Math.floor(sw.atk1*sw.addi*0.01,0);
panel.base=panel.basedata[2];
break;

case "archer":
uw.atk=uw.stardata[3][uw.star];
sw.atk1=Math.floor(sw.base[2]*(2**sw.adv)*sw.scaling[sw.level]*(0.02*sw.rate),0);
sw.atk2=Math.floor(sw.atk1*sw.addi*0.01,0);
panel.base=panel.basedata[3];
break;

case "mechanic":
uw.atk=uw.stardata[4][uw.star];
sw.atk1=Math.floor(sw.base[2]*(2**sw.adv)*sw.scaling[sw.level]*(0.02*sw.rate),0);
sw.atk2=Math.floor(sw.atk1*sw.addi*0.01,0);
panel.base=panel.basedata[4];
break;

case "wizard":
uw.atk=uw.stardata[5][uw.star];
sw.atk1=Math.floor(sw.base[2]*(2**sw.adv)*sw.scaling[sw.level]*(0.02*sw.rate),0);
sw.atk2=Math.floor(sw.atk1*sw.addi*0.01,0);
panel.base=panel.basedata[5];
break;

case "priest":
uw.atk=uw.stardata[6][uw.star];
sw.atk1=Math.floor(sw.base[2]*(2**sw.adv)*sw.scaling[sw.level]*(0.02*sw.rate),0);
sw.atk2=Math.floor(sw.atk1*sw.addi*0.01,0);
panel.base=panel.basedata[6];
break;

default:
uw.atk=0;
sw.atk1=0;
sw.atk2=0;
panel.base=0;
}//end switch

switch (document.forms[0].erquality.value){

case "0":
er.atk=er.stardata[0][er.star];
break;

case "1":
er.atk=er.stardata[1][er.star];
break;

case "2":
er.atk=er.stardata[2][er.star];
break;

default:
er.atk=0;
}//end switch

uw.atk=(uw.mode==1)?uw.atk:Number(document.forms[0].uwatk.value);
sw.atk=(sw.mode==1)?(sw.atk1+sw.atk2):Number(document.forms[0].swatk.value);
er.atk=(er.mode==1)?er.atk:Number(document.forms[0].eratk.value);
getswatk();
getpanelatk();
}//end function

//取得攻擊前綴結果
function getpreatk1(){
preatk.mul=(Number(document.forms[0].preatk.value)+100)/100;
getpanelatk();
}

function getpreatk2(){
getpanelatk();
}

//顯示(取得)魂武攻擊
function getswatk(){
document.getElementById("swdetail").innerHTML="魂武攻擊：<span>"+sw.atk1+"</span>+<span style=\"color:orange;\">"+sw.atk2+"</span>";
}

//顯示(取得)面板攻擊
function getpanelatk(){
panel.atk=Math.floor((panel.base+uw.atk+sw.atk+er.atk)*preatk.mul);
panel.atk=(panel.mode==1)?panel.atk:Number(document.forms[0].panelatk.value);
document.getElementById("paneldetail").innerHTML="面板攻擊：<span>"+panel.atk+"</span>";
}

//顯示(取得)防禦減傷倍率
function getdefmul(){
//設定輸入上下限
document.getElementById("def.enemy").value=range(document.getElementById("def.enemy").value,0,Infinity);
document.getElementById("def.rai").value=range(document.getElementById("def.rai").value,0,Infinity);
document.getElementById("def.red").value=range(document.getElementById("def.red").value,0,Infinity);
document.getElementById("def.inc").value=range(document.getElementById("def.inc").value,0,Infinity);
document.getElementById("def.dec").value=range(document.getElementById("def.dec").value,0,Infinity);
document.getElementById("pen.x").value=range(document.getElementById("pen.x").value,0,9999);

//取得敵人防禦
def.enemy=document.getElementById("def.enemy").value;

//取得扣防％＆增防％
var raise=document.getElementById("def.rai").value;
var reduce=document.getElementById("def.red").value;

//取得扣防值＆增防值
var increase=document.getElementById("def.inc").value;
var decrease=document.getElementById("def.dec").value;

//取得防穿值
pen.x=document.getElementById("pen.x").value;

//無視防禦->敵人防禦＆增防值=0
if (document.getElementById("no.def").checked){
	def.enemy=0;	
	increase=0;
}

//無視扣防->扣防值&扣防％=0
if (document.getElementById("no.defdec").checked){
	reduce=0;	
	decrease=0;	
}

//取得實際扣防％
defred.x=(reduce-raise)*10;

//取得實際扣防值
def.dec=decrease-increase;

console.log(document.getElementById("no.defdec").value);

//顯示結果
document.getElementById("defredsoft").innerHTML="："+-defred.real().toFixed(1)+"％";
document.getElementById("pensoft").innerHTML="："+pen.real().toFixed(1)+"％";
document.getElementById("def.mul").innerHTML="防禦減傷倍率："+def.mul();
document.getElementById("realdef").innerHTML="有效防禦："+def.real();



}

//無視防禦
function nodef(){
if (document.getElementById("no.def").checked){
	document.getElementById("no.defdec").checked=false;
	nodefdec();
	document.getElementById("def.enemy").disabled=true;
	document.getElementById("def.rai").disabled=true;
	document.getElementById("def.red").disabled=true;
	document.getElementById("def.inc").disabled=true;
	document.getElementById("def.dec").disabled=true;
	document.getElementById("pen.x").disabled=true;
}else{
	document.getElementById("def.enemy").disabled=false;
	document.getElementById("def.rai").disabled=false;
	document.getElementById("def.red").disabled=false;
	document.getElementById("def.inc").disabled=false;
	document.getElementById("def.dec").disabled=false;
	document.getElementById("pen.x").disabled=false;
	}
}

//敵人無視扣防
function nodefdec(){
if (document.getElementById("no.defdec").checked){
	document.getElementById("no.def").checked=false;
	nodef();
	document.getElementById("def.red").disabled=true;
	document.getElementById("def.dec").disabled=true;
}else{
	document.getElementById("def.red").disabled=false;
	document.getElementById("def.dec").disabled=false;
}
}

//產生遞減後數值
function softcap(x,max,x1,a1,b1,x2,a2,b2){
var c=1000000;
if(x>x1) return max-Math.floor(c*max/(a1*x*x+b1*x+c));
if(x>x2) return (a2*x+b2*1000)/1000;
return x;
}

//設定輸入最大最小
function range(x,min,max){
if(x>max) return max;
if(x<min) return min;
return x;
}

function gettough(){
tough.x=document.getElementById("tough.x").value;
console.log(tough.real());
}












