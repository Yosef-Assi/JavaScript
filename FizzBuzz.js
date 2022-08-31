function overpizz(crustType,sauceType,cheeses,toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;
}
var pizza1 =overpizz("deep dish","tradiontal",["mozzorila"],["pepponrari","sasage"]);
console.log(pizza1);

var pizza2 =overpizz("hand tossed","marinara",["mozzorila","feta"],["mushroms","olives","onions"]);
console.log(pizza2);
//var pizza3 =overpizz("deep dish","new",["mozzorila"],["olives"]);
//console.log(pizza3);
//var pizza4 =overpizz("deep dish","new",["mozzorila"],["olives"]);
//console.log(pizza4);
var crustType = ["deep dish","fl1","fl2","fl3","fl4"];
var sauceType = ["tradiontal","s1","s3"];
var toppings =  [["feta","onions"],["mushroms","pepp"]];
var cheess    = [["feta","mozzorila"],["feta","new"]];

function randompick(arr1){
var rand=Math.floor(arr1.length * Math.random());
return arr1[rand];
}
console.log(randompick(crustType));
function randomPizza(){

}