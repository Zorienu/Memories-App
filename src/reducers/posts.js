// state is the same as posts, const reducer
const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL": // fetching all the posts
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer;
