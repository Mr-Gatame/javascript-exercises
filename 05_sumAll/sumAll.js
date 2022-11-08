const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return `ERROR`;
    } else if (typeof num1 !== `number` || typeof num2 !== `number`) {
        return `ERROR`;
    } else if (num1 < num2) {
        let low = num1;
        let high = num2;
        let result = 0;
        while (low <= high) {
            result += low;
            low++;
        }
        return result;
    } else if (num2 < num1) {
        let low = num2;
        let high = num1;
        let result = 0;
        while (low <= high) {
            result += low;
            low++;
        }
        return result;
    }
}

sumAll(1, 4);




// Do not edit below this line
module.exports = sumAll;