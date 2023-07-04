export const userQuery = (userId) => {
    console.log("userId: ", userId)
    const query = `*[_type == "user" && _id == ${userId}]`
    console.log("query: ", query)
    return  query;
}