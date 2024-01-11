import React from 'react'
import PostAuthor from "./PostAuthor";
import Time from "./Time";
import PostReaction from "./PostReaction";

const PostExcerpt = ({post}) => {
  return (
    <article >
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <Time timestamp={post.date} />
      </p>
      <PostReaction post={post} />
    </article>
  );
}

export default PostExcerpt
