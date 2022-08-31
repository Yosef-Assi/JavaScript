function pizzOven(crustType,sauceType,cheeses,toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;
}
var pizza1 =pizzOven("deep dish","tradiontal",["mozzorila"],["pepponrari","sasage"]);
console.log(pizza1);

var pizza2 =pizzOven("hand tossed","marinara",["mozzorila","feta"],["mushroms","olives","onions"]);
console.log(pizza2);
var pizza3 =pizzOven("deep dish","new",["mozzorila"],["olives"]);
console.log(pizza3);
var pizza4 =pizzOven("deep dish","new",["mozzorila"],["olives"]);
console.log(pizza4);
// Random Pizza 
var crustType = ["deep dish","fl1","fl2","fl3","fl4"];
var sauceType = ["tradiontal","s1","s3"];
var toppings =  ["feta","onions","mushroms","pepp"];
var cheess    = ["feta","mozzorila","feta","new"];



function randompick(arr1){
var rand=Math.floor(arr1.length * Math.random());
return arr1[rand];
}

function randompick2(max,min){
var pick1=Math.floor(Math.random()*(max-min))+1 ;
return pick1;

}

function randomPizza(){
        var newpizza={};
        newpizza.crustType=randompick(crustType);
        newpizza.sauceType=randompick(sauceType);
        newpizza.chesses=[];
        newpizza.toppings=[];
        for(var i=0;i<=randompick2(4,1);i++){
            newpizza.toppings.push(randompick(toppings));
        }
        for(var i=0;i<=randompick2(4,1);i++){
            newpizza.chesses.push(randompick(cheess));
        }
        return newpizza;
        
}
var x=randomPizza();
console.log("The Random Pizza is  :)")
console.log(x);
