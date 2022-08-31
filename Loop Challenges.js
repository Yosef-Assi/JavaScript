//1  Print odds 1-20
function oddNummber(){
var Array1 =[];
for(var i=1;i<=20;i++){
    if(i%2!=0){
        Array1.push(i);
    }
    
}
console.log(Array1);
}
oddNummber();
//2 Decreasing Multiples of 3
function multipThree(){
    var Array2=[];
    for(i=100;i>=0;i--){
        if(i%3==0){
            Array2.push(i);
        }
    }
    console.log(Array2);
}
multipThree();
//3 Print the sequence
function sequance(){
    var Array3=[];
    for(var i=4 ;i>=-4;i-=1.5){
        Array3.push(i);
    }
    console.log(Array3);
}
sequance();

//4 Sigma

function sigma(){
    var sum=0;
    for(var i=0;i<=100;i++){
        sum+=i;
    }
    console.log(sum);
}
sigma();

// 5 Factorial

function factorial(){
    var mul=1;
    for(var i=1;i<=12;i++){
        mul*=i;
    }
    console.log(mul);
}
factorial();