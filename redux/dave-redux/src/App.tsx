import PostForm from "./features/posts/PostForm";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <>
      <main className="flex flex-col min-h-screen justify-evenly items-center gap-4 p-12">
        <h1 className="text-4xl lg:text-7xl tracking-wide leading-4 p-4 text-center">
          Post Creation Form
        </h1>
        <PostForm />
        <PostList />
      </main>
    </>
  );
}

export default App;
