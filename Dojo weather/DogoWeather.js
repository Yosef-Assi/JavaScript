

function delete2(){
    document.getElementById("d1").remove();
}
var x1=document.getElementById("h1").innerText;
var int1=parseInt(x1);
console.log(int1);

var x2=document.getElementById("c1").innerText;
var int2=parseInt(x2);
console.log(int2);

var x3=document.getElementById("h2").innerText;
var int3=parseInt(x3);
console.log(int3);

var x4=document.getElementById("c2").innerText;
var int4=parseInt(x4);
console.log(int4);

var x5=document.getElementById("h3").innerText;
var int5=parseInt(x5);
console.log(int5);
var x6=document.getElementById("c3").innerText;
var int6=parseInt(x6);
console.log(int6);

var x7=document.getElementById("h4").innerText;
var int7=parseInt(x7);
console.log(int7);

var x8=document.getElementById("c4").innerText;
var int8=parseInt(x8);
console.log(int8);


function change(){
   var x= document.getElementById("degree").value;
   if(x=="Farad"){
        int1=Math.floor(int1*9/5+32) +"°";
        int2=Math.floor(int2*9/5+32) +"°";

        int3=Math.floor(int3*9/5+32) +"°";
        int4=Math.floor(int4*9/5+32) +"°";

        int5=Math.floor(int5*9/5+32) +"°";
        int6=Math.floor(int6*9/5+32) +"°";

        int7=Math.floor(int7*9/5+32) +"°";
        int8=Math.floor(int8*9/5+32) +"°";
   }
   document.getElementById("h1").innerText=int1;
   document.getElementById("c1").innerText=int2;

   document.getElementById("h2").innerText=int3;
   document.getElementById("c2").innerText=int4;

   document.getElementById("h3").innerText=int5;
   document.getElementById("c3").innerText=int6;

   
   document.getElementById("h4").innerText=int7;
   document.getElementById("c4").innerText=int8;

}

function navbar1(){
    alert("Loading weather report ");
}