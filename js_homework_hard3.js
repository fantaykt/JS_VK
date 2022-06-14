/*
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number */ 

var age_2 = 18
var age_3 = 60

function showMessage(age_1) {
    if ((/^[-+]?(\d+)$/.test(age_1))){age_1 = parseInt(age_1)}
        if (typeof(age_1)=='number' & isNaN(age_1)==false) {  
        if (age_1 < age_2) {console.log("You don't have access cause your age is " + age_1 + ". It's less then "+age_2)} 
        else if ((age_1>=age_2&age_1<age_3)) {console.log("Welcome!")} 
        else if (age_1>age_3) {console.log("Keep calm and look Culture channel")}
        else {console.log("Technical work" + typeof(age_1) + " " + age_1)} }
   
    else {console.log("Error  - not number")}

}
showMessage(17);
showMessage(18);
showMessage(61);
showMessage("25");
showMessage("25ff");
showMessage("test");
