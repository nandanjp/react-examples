import PostForm from "./features/posts/PostForm";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 p-2 min-h-screen md:p-8 lg:p-12">
        <PostForm />
        <PostList />
      </div>
    </>
  );
}

export default App;
