function changePositionOfWidget(dataArray, id, insertIndex) {
    try {
        const removedItem = dataArray.find((item) => item._id === id);
        if (!removedItem) {
            throw new Error(`Item with id ${id} not found`);
        }
        const filteredArray = dataArray.filter((item) => item._id !== id);
        const copiedArray = [...filteredArray];
        copiedArray.splice(insertIndex, 0, removedItem);
        return copiedArray;
    } catch (error) {
        throw new Error(`Item with id ${id} not found`);
    }
}

module.exports = { changePositionOfWidget };
