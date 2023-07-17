import { useAppSelector } from "@/app/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TimeAgo from "./TimeAgo";
import { ReactionType } from "./postSchema";
import ReactionButton from "./ReactionButton";

const PostList = () => {
  const posts = useAppSelector((state) => state.posts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.toISOString().localeCompare(a.date.toISOString()));

  const renderedPosts = orderedPosts.map((post) => (
    <Card key={post.id}>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>A Post LOL</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-between items-center gap-4">
          {post.content}
          <TimeAgo timeStamp={post.date.toISOString()} />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col justify-between items-start gap-4">
          {post.user ? post.user : "Unknown Author"}
          <div className="flex flex-row justify-evenly gap-3">
            <ReactionButton post={post} reaction={ReactionType.ThumbsUp} />
            <ReactionButton post={post} reaction={ReactionType.Wow} />
            <ReactionButton post={post} reaction={ReactionType.Rocket} />
            <ReactionButton post={post} reaction={ReactionType.Heart} />
            <ReactionButton post={post} reaction={ReactionType.Coffee} />
          </div>
        </div>
      </CardFooter>
    </Card>
  ));

  return (
    <section className="flex flex-col gap-6 m-4 justify-evenly items-center">
      <h2 className="text-3xl lg:text-5xl leading-4 tracking-wide text-left">
        Posts
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-6 lg:gap-10 m-4 justify-center items-center">
        {renderedPosts}
      </div>
    </section>
  );
};

export default PostList;
