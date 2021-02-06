import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE_POST } from "../constants/actionTypes";

// state is the same as posts, const reducer
const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL: // fetching all the posts
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
    case LIKE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducer;
