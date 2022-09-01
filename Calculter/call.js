


function press(n){
    document.getElementById("display").value=n;
}
console.log(press(2));

var n=document.getElementById("display").innerText;
function setOP(){
        document.getElementById("display").innerText=press(n)+"+";

}