import { useAppSelector } from "@/app/hooks";
import PostExcerpt from "./PostExcerpt";

const PostList = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  const postsStatus = useAppSelector((state) => state.posts.status);
  const error = useAppSelector((state) => state.posts.error);

  let content: React.ReactNode;

  if (postsStatus === "loading") {
    content = (
      <p className="text-blue-300 text-3xl lg:text-5xl tracking-wide leading-4">
        Loading....
      </p>
    );
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = (
      <>
        {orderedPosts.map((post) => (
          <PostExcerpt key={post.id} post={post} />
        ))}
      </>
    );
  } else if (postsStatus === "failed") {
    content = (
      <p className="text-red-300 text-3xl lg:text-5xl tracking-wide leading-4">
        {error}
      </p>
    );
  }

  return (
    <section className="flex flex-col justify-evenly items-center gap-4 p-8 max-w-fit xl:grid xl:grid-cols-3 xl:grid-flow-row xl:justify-center xl:items-center xl:gap-5 md:grid md:grid-cols-2 md:grid-flow-row md:justify-center md:items-center md:gap-5 md:max-w-fit">
      {content}
    </section>
  );
};

export default PostList;
