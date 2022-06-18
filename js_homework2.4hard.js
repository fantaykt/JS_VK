function isPalindrom(word){
    let wordLC = word.toLowerCase()
    let reverse = wordLC.split('').reverse().join('');
    if (wordLC == reverse){console.log("слово "+word+" палиндром")}
        else console.log("слово "+word+" не палиндром")
    
    }
    
    
isPalindrom("abba")
isPalindrom("Abba")
isPalindrom("abba abba abbaa")