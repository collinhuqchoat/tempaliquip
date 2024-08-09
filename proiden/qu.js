function validate_different_outputs(input) {
    if (typeof input !== 'number') {
        throw new Error("Input must be a number");
    }

    let result;
    if (input < 0) {
        result = "negative";
    } else if (input === 0) {
        result = "zero";
    } else {
        result = "positive";
    }

    console.log(`The input ${input} is ${result}.`);
}

// Calling the function with -2
validate_different_outputs(-2);
