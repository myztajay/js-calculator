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

}

function collect(){
  a = document.getElementById('firstNumber').value;
  b = document.getElementById('secondNumber').value;
  a = parseInt(a);
  b = parseInt(b);
  if (document.getElementById("choose").innerHTML == "Addition"){
    document.getElementById("answer").innerHTML = calculator.add(a,b);
  }
  else if (document.getElementById("choose").innerHTML == "Subtraction"){
    document.getElementById("answer").innerHTML = calculator.sub(a,b);
  }
  else if (document.getElementById("choose").innerHTML == "Multiplication"){
    document.getElementById("answer").innerHTML = calculator.mul(a,b);
  }
  else if (document.getElementById("choose").innerHTML == "Division"){
    document.getElementById("answer").innerHTML = calculator.div(a,b);
  }
  else if (document.getElementById("choose").innerHTML == "Exponents"){
    document.getElementById("answer").innerHTML = calculator.exp(a,b);
  }
  else if (document.getElementById("choose").innerHTML == "Refactor Prime"){
    document.getElementById("answer").innerHTML =
    '<iframe src="https://player.vimeo.com/video/120469122?autoplay=1&color=c9ff23&title=0&byline=0&portrait=0" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    console.log("RICK ROLLED");
    alert("Now you've done it...");
  }

}
