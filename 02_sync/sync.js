class Lodash {
    compact(array) {
        return array.filter(x => x);
    }

    groupBy(array = [], prop) {
        return array.reduce((total, i) => {
            const key = typeof prop === 'function' ? prop(i) : i[prop];
            if (!total[key]) {
                total[key] = [];
            }
            total[key].push(i);
            return total;
        }, {});
    }
}

module.exports = Lodash;