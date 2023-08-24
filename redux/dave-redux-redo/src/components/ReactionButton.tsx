import { useAppDispath, useAppSelector } from "@/app/hooks";
import { Button } from "./ui/button";
import { PostReactionType } from "@/features/posts/posts-types";
import { reactionAdded } from "@/features/posts/posts-slice";
import { Coffee, Heart, PartyPopper, Rocket, ThumbsUp } from "lucide-react";

interface ReactionButtonProps {
  reaction: PostReactionType;
  postId: string;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({
  reaction,
  postId,
}) => {
  const dispatch = useAppDispath();
  const postReaction = useAppSelector(
    (state) => state.posts.posts.find((post) => post.id === postId)?.reactions
  );
  let icon: React.ReactNode;

  switch (reaction) {
    case PostReactionType.Wow:
      icon = (
        <>
          <PartyPopper />
          <span className="text-sm tracking-tight leading-3">
            {postReaction?.wow}
          </span>
        </>
      );
      break;
    case PostReactionType.Heart:
      icon = (
        <>
          <Heart />
          <span className="text-sm tracking-tight leading-3">
            {postReaction?.heart}
          </span>
        </>
      );
      break;
    case PostReactionType.Rocket:
      icon = (
        <>
          <Rocket />
          <span className="text-sm tracking-tight leading-3">
            {postReaction?.rocket}
          </span>
        </>
      );
      break;
    case PostReactionType.Coffee:
      icon = (
        <>
          <Coffee />
          <span className="text-sm tracking-tight leading-3">
            {postReaction?.coffee}
          </span>
        </>
      );
      break;
    default:
      icon = (
        <>
          <ThumbsUp />
          <span className="text-sm tracking-tight leading-3">
            {postReaction?.thumbsUp}
          </span>
        </>
      );
      break;
  }

  return (
    <Button
      variant={"default"}
      onClick={() => dispatch(reactionAdded({ reaction, postId }))}
      className="flex flex-row justify-between items-center gap-2"
    >
      {icon}
    </Button>
  );
};

export default ReactionButton;
