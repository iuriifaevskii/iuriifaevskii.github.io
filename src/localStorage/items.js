const getItemsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('items'));
};

const setItemsToLocalStorage = (newItems) => {
    localStorage.setItem('items', JSON.stringify(newItems));
};

export {
    getItemsFromLocalStorage,
    setItemsToLocalStorage
}
