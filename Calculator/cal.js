
var displayDiv = document.querySelector("#display");

var op;
function press(n){
    var val=displayDiv.innerText;
    displayDiv.innerText=val+n;
}
function clr(){
    document.getElementById("display").innerText="";
    
}
var x11=displayDiv.innerText;
arr =[];
function setOP(n1){
    var x1=displayDiv.innerText;
    arr.push(parseInt(x1));
    clr();
    op=n1;
}
console.log(arr);

function calculate(){
  var z=  document.getElementById("display").innerText;
    arr.push(parseInt(z));
    console.log(z);
    clr();
    console.log(arr[0]+arr[1]);
    console.log(Calculatrice(arr[0], arr[1], op));
    var result =Calculatrice(arr[0], arr[1], op);
    
    document.getElementById("display").innerText=result;
    setTimeout(message, 3000);
     

    
    for(i=0;i<2;i++){
        arr.pop();
}
function message(){
    document.getElementById("display").innerText=" ";
}



}

function Calculatrice(a, b, op) {

    switch (op) {
  
      case '+':
        return a + b
        break;
      case '-':
        return a - b
        break;
      case '*':
        return a * b
        break;
      case '/':
        return a / b
        break;
    
    }
  
  }