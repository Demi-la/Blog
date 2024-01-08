import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import Time from "./Time";
import PostReaction from "./PostReaction";
import React from "react";

const PostsLists = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <Time timestamp={post.date} />
      </p>
      <PostReaction post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsLists;
