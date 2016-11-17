var calculator = {
  add: function(x,y){
    return x + y;
  },
  sub: function(x,y){
    return  x - y;
  },
  mul: function(x,y){
    return  x * y;
  },
  div: function(x,y){
    return  x/y;
  },
  exp: function(x,y){
    return Math.pow(x, y);
  }
};


function changeButton(i){
  x = document.getElementById(i).innerHTML;
  document.getElementById("choose").innerHTML = x;
  return x;
}





//let addopElem = document.getElementById('addop');
//addopElem.

function collect(){

  x = document.getElementById('firstNumber').value;
  y = document.getElementById('choose').value;
  z = document.getElementById('secondNumber').value;
  answer = x y z;
}
