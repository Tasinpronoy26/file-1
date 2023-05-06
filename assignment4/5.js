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

const result = gemsToDiamond(1, 1, 1);
console.log(result3);