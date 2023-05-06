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

const num = [ 2, -5, -8, -13 ];
const myResult = findingBadData(num);
console.log(myResult);