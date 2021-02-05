import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

export default combineReducers({ posts, auth }); // posts: posts
// combineReducers generates a function that calss our reducers with
// the slice of state selected according to their key
// It then combines the results into a single object once again
