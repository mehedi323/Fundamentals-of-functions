function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    return sum;
}
const mony = [20, 10, 30, 50, 50];
const sum = sumOfNumbers(mony);
console.log('sum of numbers:', sum);



