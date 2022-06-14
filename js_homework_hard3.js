/*
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number */ 



function showMessage(age) {
    if (parseInt(age) || typeof(age)=='number') {   //если строка цифры или тип age number
        if (age < 18) {console.log("You don't have access cause your age is " + age + ". It's less then 60")} 
        else if ((age>=18&age<60)) {console.log("Welcome  !")} 
        else if (age>60) {console.log("Keep calm and look Culture channel")}
        else {console.log("Technical work")} }
    else {console.log("Error  - not number")}

}
showMessage(17);
showMessage(18);
showMessage(61);
showMessage("2");
showMessage("test");