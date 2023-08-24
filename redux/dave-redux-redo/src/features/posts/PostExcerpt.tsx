import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PostReactionType, PostValues } from "./posts-types";
import ReactionButtons from "@/components/ReactionButton";

interface PostExcerptProps {
  post: PostValues;
}

const PostExcerpt: React.FC<PostExcerptProps> = ({ post }) => {
  return (
    <article className="h-full">
      <Card className="shadow-md h-full">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>A post written by someone.... :)</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="w-full whitespace-normal break-words">{post.content}</p>
        </CardContent>
        <CardFooter className="flex flex-col justify-evenly items-start gap-4">
          <div className="flex flex-row justify-normal items-start gap-3 flex-wrap">
            <ReactionButtons
              reaction={PostReactionType.ThumbsUp}
              postId={post.id}
            />
            <ReactionButtons reaction={PostReactionType.Wow} postId={post.id} />
            <ReactionButtons
              reaction={PostReactionType.Coffee}
              postId={post.id}
            />
            <ReactionButtons
              reaction={PostReactionType.Heart}
              postId={post.id}
            />
            <ReactionButtons
              reaction={PostReactionType.Rocket}
              postId={post.id}
            />
          </div>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </CardFooter>
      </Card>
    </article>
  );
};

export default PostExcerpt;
