//votre code ici
function pairNumbers(min, max) {
    const numberMin = Number(min);
    const numberMax = Number(max);
    let numbersArray = [];
    for (let i = numberMin; i <= numberMax; i++) {
        if (i % 2 === 0) {
            numbersArray.push(i);
        }
    } 
   return numbersArray.join();
}

export default pairNumbers;
