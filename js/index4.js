var wutai = document.getElementById("wutai");
var btn = document.getElementById("btn");
var div = wutai.getElementsByTagName("div");
btn.onclick=function(){

  var a=7;
  var q=1;
  if(a){
      console.log(1)
    for(var i=7; i>0; i--){
        if(i==1){
          div[i].style="transition:all 1000ms "+(7-i)*200+"ms;"+"transform:rotateX(-179deg) translateZ(0px);";
        }else{
          div[i].style="transition:all 1000ms "+(7-i)*200+"ms;"+"transform:rotateX(180deg);";
        }
    }
  }
}
