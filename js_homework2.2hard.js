function printSmile(stroka, numberOfRows){
    stroka = stroka.toString()
    for (let i = 1 ; i <=numberOfRows ; i++ ) { console.log(stroka.repeat(i))};
    }
    printSmile(2, 5)