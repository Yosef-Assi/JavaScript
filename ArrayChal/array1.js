function alwaysHungry(arr) {
    for (var i=0;i<=arr.length;i++){
        if(arr[i]=="food"){
            console.log("Yummi");
            
        }
        else
        console.log("Im Hungry");
        
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

////////

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0;i<=arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]



function betterThanAverage(arr) {
    var sum = 0;
    for (var i=0 ; i < arr.length; i++){
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    var count = 0;
    for (var j =0; j< arr.length;j++){
        if(arr[j] < avg){
            count+=1;
        }
        
    }
    return count;
    // count how many values are greated than the average
    
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
var result2 = betterThanAverage([2,4,6]);
console.log(result2);



