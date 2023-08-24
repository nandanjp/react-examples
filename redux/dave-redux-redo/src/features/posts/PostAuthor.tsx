import { useAppSelector } from "@/app/hooks";

interface PostAuthorProps {
  userId: number;
}

const PostAuthor: React.FC<PostAuthorProps> = ({ userId }) => {
  const users = useAppSelector((state) => state.users.users);
  const author = users.find((user) => user.id === userId);

  return <span>Written by {author ? author.name : "Unknown Author"}</span>;
};

export default PostAuthor;
