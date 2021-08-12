//#backgroundを取得
let background = document.getElementById('background');

document.addEventListener('mousemove', event => {
  
  //X座標(値は適宜調整)
  var x = Math.round(event.pageX / 20);
  //Y座標(値は適宜調整)
  var y = Math.round(event.pageY / 20);
  
  console.log(x, y);
  
  //#backgroundのX軸・Y軸を設定
  background.style.marginLeft = x +'px';
  background.style.marginTop = y +'px';
});