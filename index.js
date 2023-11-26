let nestedArray = [2, 5, [5, 'test', [5, 6, 'second']], 6, 7];

function getSum(arr) {
    let sum = 0;
    arr.forEach(element => {
        if(typeof(element) === 'number') sum += element;
        else if(Array.isArray(element)){
            sum += getSum(element)
        }
    });
    return sum;
};

console.log(getSum(nestedArray));