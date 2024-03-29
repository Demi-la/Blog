import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

import React from "react";
import { useEffect } from "react";

const PostsLists = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts);
   const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);
    
    useEffect(() => {
     if (postsStatus === "idle") {
        dispatch(fetchPosts())
     }
    }, [postsStatus, dispatch])



  let content;
  if (postsStatus === "loading") {
    content = <p>Loading</p>
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map(post => <PostExcerpt key={post.id} post={post}/>)
  } else if (postsError === 'failed'){
    content = <p>{postsError}</p>
  }
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsLists;
