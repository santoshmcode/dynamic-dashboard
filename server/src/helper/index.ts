interface Data {
  _id: string;
}

function changePositionOfWidget(dataArray: Data[], id: string, insertIndex: number): Data[] | Error | undefined {
  try {
    const removedItem = dataArray.find(item => item._id === id);
    if (!removedItem) {
      throw new Error(`Item with id ${id} not found`);
    }
    const filteredArray = dataArray.filter(item => item._id !== id);
    const copiedArray = [...filteredArray];
    copiedArray.splice(insertIndex, 0, removedItem);
    return copiedArray;
  } catch (error: any) {
    throw new Error(`Item with id ${id} not found`);
  }
}

export { changePositionOfWidget }