function isValue (a,b) {
    return (Number.isFinite(a) && Number.isFinite(b))
}

function Calc(operator, a, b) {
    if (isValue(a,b)) {
        switch (operator) {
            case 'sum':
                return a + b;
            case 'division':
                if (b == 0) {
                    return ('Error: Division by zero');
                }
                return a / +b;
            case 'multi':
                return a * b;
            case 'minus':
                return a - b;
            default: 
                return ('unknown operation');
        }
    } else {
        return ('Error');
    }
}

console.log(Calc('division', -4, 3))
