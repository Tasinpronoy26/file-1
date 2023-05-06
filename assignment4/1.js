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

const resultNo = mindGame(50);
console.log(resultNo);
