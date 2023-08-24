import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { PostFormValues, PostValues, postFormSchema } from "./posts-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispath, useAppSelector } from "@/app/hooks";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { postAdded } from "./posts-slice";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const PostForm = () => {
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispath();

  const form = useForm<PostFormValues>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      userId: "1",
      title: "Random Title",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eos quam dolor magni hic nostrum repellat unde!",
    },
  });

  const onSubmit: SubmitHandler<PostFormValues> = (data: PostFormValues) => {
    try {
      const { userId, title, content } = data;
      const newPost: PostValues = {
        id: nanoid(),
        title,
        content,
        userId: Number(userId),
        date: new Date().toISOString(),
        reactions: {
          thumbsUp: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
          wow: 0,
        },
      };
      form.reset();
      console.log(newPost);
      dispatch(postAdded(newPost));
    } catch (err) {
      console.error(err);
    }
  };

  const onError = (errors: FieldErrors<PostFormValues>) => {
    console.log("errors", errors);
  };

  return (
    <div className="flex flex-col justify-evenly items-start gap-4 min-w-max bg-gray-300/30 backdrop-blur-md p-6 rounded-lg">
      <p className="text-blue-500 text-2xl lg:text-4xl tracking-wide leading-4 font-bold">
        Create a New Post
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="w-full flex flex-col justify-evenly items-start gap-3"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormDescription>Title of Post</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="content" {...field} />
                </FormControl>
                <FormDescription>Content of Post</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  name="userId"
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="choose author" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {users.map((user) => (
                      <SelectItem key={user.id} value={`${user.id}`}>
                        {user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Author of Post</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="default" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostForm;
