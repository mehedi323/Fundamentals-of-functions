function multipleNumbers (numbers){
    let mupti = 5;
    for(const num of numbers){
        mupti = mupti * num;
    }
    return mupti;
}
const multi = [10, 12];
const result = multipleNumbers(multi);
console.log('multiple numbers:', result);