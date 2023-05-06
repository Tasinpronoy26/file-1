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

        let newResult = number * 2;
        return newResult;
    }
}

var result = isLGSeven(15);
console.log(result);