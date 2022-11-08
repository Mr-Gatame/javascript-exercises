const removeFromArray = function(arr, ...value) {
    const newArray = Array.from(arr);
    const valuesToDelete = new Set(value);
    const finalArray = newArray.filter((name) => {
        return !valuesToDelete.has(name);
    });
    return finalArray;
}
removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;