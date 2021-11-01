function Calc(operator, a, b) {
    if (isNaN(a) || isNaN(b)) {
        return ('Error');
    }
   
    if (operator === 'sum') {
        return a + b;
    } else if (operator === 'multi') {
        return a * b;
    } else if (operator === 'division') {
        if (b == 0) {
            return ('Error: Division by zero')
        }
        return a / b;
    } else if (operator === 'minus') {
        return a - b;
    } else {
        return ('unknown operation');
    }
}

console.log(Calc('multi', "3", 2))


