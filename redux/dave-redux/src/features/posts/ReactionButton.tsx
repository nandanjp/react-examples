import { useAppDispatch } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { reactionAdded } from "./post-slice";
import { PostFormValues, ReactionType } from "./postSchema";
import { Coffee, Heart, Rocket, Thermometer, ThumbsUp } from "lucide-react";

interface ReactionButtonProps {
  post: PostFormValues;
  reaction: ReactionType;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({ post, reaction }) => {
  const dispatch = useAppDispatch();
  let icon: React.ReactNode;
  let reactionValue: number;
  switch (reaction) {
    case ReactionType.ThumbsUp:
      icon = <ThumbsUp className="w-4 h-4" />;
      reactionValue = post.reactions.thumbsUp;
      break;
    case ReactionType.Wow:
      icon = <Thermometer className="w-4 h-4" />;
      reactionValue = post.reactions.wow;
      break;
    case ReactionType.Rocket:
      icon = <Rocket className="w-4 h-4" />;
      reactionValue = post.reactions.rocket;
      break;
    case ReactionType.Heart:
      icon = <Heart className="w-4 h-4" />;
      reactionValue = post.reactions.heart;
      break;
    case ReactionType.Coffee:
      icon = <Coffee className="w-4 h-4" />;
      reactionValue = post.reactions.coffee;
      break;
    default:
      icon = <ThumbsUp className="w-4 h-4" />;
      reactionValue = post.reactions.thumbsUp;
      break;
  }

  return (
    <Button
      variant={"default"}
      onClick={() =>
        dispatch(
          reactionAdded({
            postId: post.id,
            reaction,
          })
        )
      }
      className="flex flex-row justify-between gap-2 items-center"
    >
      {icon}
      <span className="text-sm">{reactionValue}</span>
    </Button>
  );
};

export default ReactionButton;
