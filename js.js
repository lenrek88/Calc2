function isValue (a,b) {
    return (Number.isFinite(a) && Number.isFinite(b))
}

function Calc(operator, a, b) {
    let operation = {
        sum: a+b,
        div: (b == 0) ? 'Error: Division by zero' : a/+b,
        mult: a*b,
        sub: a-b,
    }
    if (isValue(a,b)) {
        if (operator in operation) {
                return operation[operator];
        } else {
                return ('unknown operation');
        }
    } else {
        return ('Error');
    }
}

console.log(Calc('div', 10, 3))

