const roundFiveNoRepeatNumber = function (min,max){
    let result = [];
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(randomNumber);
    while(result.length < 5){
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if(!result.includes(randomNumber)){
            result.push(randomNumber);
        }
    }
    return result;
}

const roundFiveNoRepeatNumber2 = function (max,min){
    let enums = {}
    let arr = Array.from({length:max-min},(v,k) => k)
    let result = []
    let x = 0
    while (x < 5) {
        let randomNumber = Math.floor(Math.random() * (max - min - x));
        result.push(arr.splice(randomNumber,1)[0]+min);
        x++
    }
    return result
}
console.log(roundFiveNoRepeatNumber2(99,88));