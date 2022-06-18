function getWordStructure(word){
console.log("Слово " +word +" состоит из "+ word.match(/[eyiuoaEIYOAU]/g).length +" гласных и "+ word.match(/[^eyuiIoaEYOAU]/g).length +" согласных букв")
}


getWordStructure("case")
getWordStructure("Case")
getWordStructure("Check-list")