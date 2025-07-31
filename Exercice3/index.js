// Créez votre fonction ici
function calculateAverage(array) {
    if (!array) {
        return "No numbers to calculate average";
    }
    
    let totalNumber = array.length;
    let somme = 0;
    
    for(let i = 0; i < totalNumber; i++) {
        somme += array[i];
    }

    return somme / totalNumber;
}

console.log(calculateAverage([5, 10, 15]))
console.log(calculateAverage([10, 20, 30, 20]))
console.log(calculateAverage())

export default calculateAverage
