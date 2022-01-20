const Lodash = require('./sync');

describe('Lodash compact: ', () => {
    let array = [];

    beforeEach(() => {
        array = [false, 42, 0, "", true, null, 'hello'];
    });

    const _ = new Lodash();
    test('compact should be defined', () => {
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    });

    test('should working array be editable', () => {
        array.push(...['one', 'two']);
        expect(array).toContain(...['one', 'two']);
    });

    test('should remove falsy values from array', () => {
        const result = [42,true, 'hello'];
        expect(_.compact(array)).toEqual(result);
    });

    test('should not contain falsy values', () => {
        const result = [42,true, 'hello'];
        expect(_.compact(array)).not.toContain(result);
    });
});

describe('Lodash - groupBy: ', () => {
    const _ = new Lodash();
    
    test('groupBy should be defined', () => {
        expect(_.groupBy).toBeDefined();
        expect(_.groupBy).not.toBeUndefined();
    });

    test('should group array by Math.floor()', () => {
        const array = [2.2, 2.4, 4.2, 3.1];
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        };
        expect(_.groupBy(array, Math.floor)).toEqual(result);
    });

    test('should group array by length', () => {
        const array = ['one', 'two', 'three'];
        const result = {
            5: ['three'],
            3: ['one', 'two']
        };
        expect(_.groupBy(array, 'length')).toEqual(result);
    });

    test('should not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
    });
});