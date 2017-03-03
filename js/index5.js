var box = document.getElementById("box");

var a = '<div class="wutai"> <div class="top"></div><div class="bottom"></div><div class="qian"></div><div class="hou"></div><div class="left"></div><div class="right"></div></div>';
var shu =6;
var b="";

for(var i =0;i<shu;i++){
  b+=a;
}

box.innerHTML=b;

var wutai = document.getElementsByClassName("wutai");

var cs=0;
box.onclick=function(){
  cs++;
  var jd =cs*90;
  for(var i =0;i<shu;i++){
    wutai[i].style="transition:all 500ms "+100*i+"ms;transform:rotateX("+jd+"deg);"
  }
}










// var shu =6;
// var b="";
// for(var i =0 ; i<shu ;i++){
//   b+=b;
// }
//
// box.innerHTML=b;
// box.onclick=function(){
//   alert(1)
// }
