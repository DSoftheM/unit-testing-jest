const {sum, nativeNull} = require('./intro');

describe('Sum function: ', () => {
    test('sum should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4);
    });
    
    test('sum should return value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThan(4);
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
        expect(sum(2, 3)).toBeLessThan(6);
    });
    
    test("sum of two float values", () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

describe('Native null: ', () => {
    test('should return null', () => {
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeFalsy(); 
        expect(nativeNull()).toBeDefined(); 
        expect(nativeNull()).not.toBeTruthy(); 
        expect(nativeNull()).not.toBeUndefined(); 
    });
});

