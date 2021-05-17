export function findById(thisArray, someId) {
    const numberId = Number(someId);
    for (let item of thisArray) {
        if (item.id === someId) return item;
    }
    return null;
}