/*
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка. */ 

var age_2 = 18
var age_3 = 60

function showMessage(age_1) {
 if ( typeof(age_1)== "number") {    //проверяем на тип age
 
   if (age_1 < age_2) {console.log("You don't have access cause your age is " + age_1 + ". It's less then "+age_2)} 
   else if ((age_1>=age_2&age_1<age_3)) {console.log("Welcome!")} 
   else if (age_1>age_3) {console.log("Keep calm and look Culture channel")}
   else {console.log("Technical work")} 
 }
 else {console.log("Error  - not number type")}
}
showMessage(17);
showMessage(18);
showMessage(61);
showMessage("19");