//1

// here we are doing some math (+, -, /, *)
//we are returning output by total variable


function mindGame(number) {

    if (typeof number !== 'number') {

        return 'Please enter a number';
    }

    let num = number;

    let multiple = num * 3;

    let sum = multiple + 10;

    let minus = sum / 2;

    let total = minus - 5;

    return total;

}


//2

// we check whether a string is odd or even


function evenOdd(str) {

    if (typeof str !== 'string') {

        return 'Please enter a string';
    }

    let Length = str.length;


    if (Length % 2 === 0) {

        return 'even';
    }

    else if (Length % 2 !== 0) {

        return 'odd';
    }

}




//3 

//here we did a math
//result = num - 7
//if the result is less than 7 then our output will be same (result)
//but if the result is greater than 7 then output will be newResult which is result * 2

function isLGSeven(number) {

    if (typeof number !== 'number') {

        return 'Please enter a number';
    }

    let num = number;

    let result = num - 7;

    if (result < 7) {
        return result;
    }
    else if (result > 7) {

        let newResult = result * 2;
        return newResult;
    }
}



//4

//here we find the total negative number in an arry

function findingBadData(numbers) {

    if (typeof numbers !== 'object') {

        return 'Please enter a number';
    }

    let negCount = 0;

    for (let i = 0; i < numbers.length; i++) {

        const index = i;
        const elements = numbers[index];

        if (elements < 0) {

            negCount++;

        }
    }

    return negCount;
}



//5

//here we did a math
//total = totalNumber1 + totalNumber2 + totalNumber3;
//if the total is greater than 1000*2  then our output will be newResult which is total - 2000 (result)
//but if the total is less than 1000*2 then output will be the same (total)

function gemsToDiamond(number1, number2, number3) {

   
    if (typeof number1 !== 'number' || typeof number2 !== 'number' || typeof number3 !== 'number') {

        return 'Please enter a number';
    }

    let totalNumber1 = number1 * 21;
    let totalNumber2 = number2 * 32;
    let totalNumber3 = number3 * 43;

    let total = totalNumber1 + totalNumber2 + totalNumber3;

    if (total > 1000 * 2) {
        const newResult = total - 2000;
        return newResult;
    }

    else {
        return total;
    }

}




