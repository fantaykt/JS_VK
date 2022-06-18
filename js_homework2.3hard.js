function getWordStructure(word){
console.log("Слово " +word +" состоит из "+ word.match(/[eyiuoaEIYOAU]/g).length +" гласных и "+ word.match(/[wrtpsdfghjklzxcvbnmWRTPSDFGHJKLZXCVBNM]/g).length +" согласных букв")
}


getWordStructure("case")
getWordStructure("Case")
getWordStructure("Check-list")