const getCommentsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('comments'));
};

const setCommentsToLocalStorage = (newComments) => {
    localStorage.setItem('comments', JSON.stringify(newComments));
};

export {
    getCommentsFromLocalStorage,
    setCommentsToLocalStorage
}
