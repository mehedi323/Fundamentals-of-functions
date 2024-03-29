function sumOfEventNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){ 
            sum = sum + number;
        }
    }
    return sum;
}
const eventNumber = [20, 25, 50,65, 44, 85, 54];
const totalEventNumber = sumOfEventNumbers(eventNumber);
console.log(totalEventNumber);