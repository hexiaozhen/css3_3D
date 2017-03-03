var box = document.getElementById("box");
var box1 = document.getElementById('box1');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

var cishu=0;
box1.onclick=function(){
  cishu--;
  console.log(cishu);
  var a = 40*cishu;
  var b =-15;
  console.log(a);
  box1.style.transform="rotateX("+b+"deg)rotateY("+a+"deg)translateZ(-280px)";
}
btn1.onclick=function(){
  cishu--;
  console.log(cishu);
  var a = 40*cishu;
  var b =-15;
  console.log(a);
  box1.style.transform="rotateX("+b+"deg)rotateY("+a+"deg)translateZ(-280px)";
}
btn2.onclick=function(){
  cishu++;
  console.log(cishu);
  var a = 40*cishu;
  var b =-15;
  console.log(a);
  box1.style.transform="rotateX("+b+"deg)rotateY("+a+"deg)translateZ(-280px)";
}
