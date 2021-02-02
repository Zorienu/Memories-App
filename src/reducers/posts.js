// state is the same as posts, const reducer
const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL": // fetching all the posts
      console.log("fetch all");
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE":
      console.log("update");
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};

export default reducer;
