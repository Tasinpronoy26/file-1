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

const result2 = evenOdd('chatgpt');
console.log(result2);