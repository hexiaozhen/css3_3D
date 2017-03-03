var box = document.getElementById("box");
var wutai = box.getElementsByClassName("wutai");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var mian ='<div class="wutai"><div class="mian">上</div><div class="mian">下</div><div class="mian">前</div><div class="mian">后</div><div class="mian">左</div><div class="mian">右</div></div>'
var shu =6;
var kong="";
for(var i=0 ;i<shu;i++){
  kong+=mian;
}
box.innerHTML=kong;

var cs = 0;
box.onclick=function(){

  cs++;
  var jd = cs*90;
  for(var i =0;i<shu;i++){
    wutai[i].style="transition:all 1s "+100*i+"ms; transform:rotateX("+jd+"deg)";
  }
}
btn1.onclick=function(){
  cs++;
  var jd = cs*90;
  for(var i =0;i<shu;i++){
    wutai[i].style="transition:all 1s "+100*i+"ms; transform:rotateX("+jd+"deg)";
  }
}
btn2.onclick=function(){
  cs--;
  var jd = cs*90;
  for(var i =0;i<shu;i++){
    wutai[i].style="transition:all 1s "+100*i+"ms; transform:rotateX("+jd+"deg)";
  }
}
