
//--------------------Question: 10--------------------------------


function extractFirstLetters(names: string[]) {
    let    firstLetters: string[] = []

    for (let i = 0; i < names.length; i++) {
if (names[i].length > 0) {
    firstLetters.push(names[i][0]);
    
}
        
    }
    return firstLetters
}


let result = extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"]) 
console.log(result);

//should output ["A", "B", "C", "D", "E"]