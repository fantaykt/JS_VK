/*
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка. */ 



function showMessage(age) {
 if ( typeof(age)== "number") {    //проверяем на тип age
 
    if (age < 18) {console.log("You don't have access cause your age is " + age + ". It's less then 60")} 
    else if ((age>=18&age<60)) {console.log("Welcome  !")} 
    else if (age>60) {console.log("Keep calm and look Culture channel")}
    else {console.log("Technical work")} 
 }
 else {console.log("Error  - not number")}
}
showMessage(17);
showMessage(18);
showMessage(61);
showMessage("19");