const sum = (a, b) => a + b,
    nativeNull = () => null;

console.log(sum(41,1));

function expect(value) {
    return {
        toBe: exp => value === exp
    };
}

module.exports = {sum, nativeNull};
