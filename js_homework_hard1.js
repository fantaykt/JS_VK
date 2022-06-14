/*1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61 */ 

var age_2 = 18
var age_3 = 60

function showMessage(age_1) {   //создаем функцию
 if (age_1 < age_2) {console.log("You don't have access cause your age is " + age_1 + ". It's less then "+age_2)} 
    else if ((age_1>=age_2&age_1<age_3)) {console.log("Welcome!")} 
    else if (age_1>age_3) {console.log("Keep calm and look Culture channel")}
    else {console.log("Technical work")} 
 }

showMessage(17);
showMessage(18);
showMessage(61);