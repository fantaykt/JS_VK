/*1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61 */ 



function showMessage(age) {   //создаем функцию
 if (age < 18) {console.log("You don't have access cause your age is " + age + ". It's less then 60")} 
    else if ((age>=18&age<60)) {console.log("Welcome  !")} 
    else if (age>60) {console.log("Keep calm and look Culture channel")}
    else {console.log("Technical work")} 
 }

showMessage(17);
showMessage(18);
showMessage(61);