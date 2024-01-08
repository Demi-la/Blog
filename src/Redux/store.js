import { configureStore } from "@reduxjs/toolkit";
import  postsReducer  from "../component/posts/postsSlice";
import userReducer from "../component/users/usersSlice"
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
  },
});
