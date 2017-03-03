
var box1 = document.getElementById('box1');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var box = box1.getElementsByTagName('div');
var currPage=6;
btn1.onclick=function(){
  if(currPage==1)return;

  box[currPage-1].style.transform="rotateX(-90deg)";
  currPage--;
  box[currPage-1].style.transform="rotateX(0deg)";
}
btn2.onclick=function(){
  if(currPage==6)return;
  box[currPage-1].style.transform="rotateX(0deg)";
  currPage++;
  box[currPage-1].style.transform="rotateX(0deg)";
}

box1.onclick=function(){
  if(currPage==1)return{

  }
  box[currPage-1].style.transform="rotateX(-90deg)";
  currPage--;
  box[currPage-1].style.transform="rotateX(0deg)";

}




document.onkeyup = function (event) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;
  console.log(e);

}
// a.onkeydown=function(){
//   if(currPage==1)return{
//
//   }
//   box[currPage-1].style.transform="rotateX(-90deg)";
//   currPage--;
//   box[currPage-1].style.transform="rotateX(0deg)";
// }
