const sumOfTwo = (arr,sum) => {
    arr = arr.sort((a,b) => a-b);
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (arr[i] + arr[j] === sum) {
         return [i,j]
        }
        if (arr[i] + arr[j] < sum) {
        i++;
        }
        if (arr[i] + arr[j] > sum) {
        j--;
        }
    }
}

let indexs = sumOfTwo([1,2,3,4,5,6,7,8,9,10],15)
console.log(indexs)