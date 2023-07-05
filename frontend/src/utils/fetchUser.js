export const fetchUser =  () => {
    const userObj = JSON.parse(localStorage.getItem('userObj'));
    return userObj;
}

