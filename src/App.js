
// import "./App.css";
// import PostsLists from "./component/posts/postsLists";
import AddPostsForm from "./component/posts/AddPostsForm";
import PostsLists from "./component/posts/PostsLists";


function App() {
  return (
    <>
      <div className="App">
        <AddPostsForm />
        <PostsLists />
      </div>
    </>
  );
}

export default App;
