import { nanoid } from "@reduxjs/toolkit";
import * as z from "zod";

export const enum PostReactionType
{
    ThumbsUp = "thumbsUp",
    Wow = "wow",
    Heart = "heart",
    Rocket = "rocket",
    Coffee = "coffee"
}

export const postSchema = z.object({
    id: z.string({
        required_error: "A post must have an id"
    }).default(nanoid()),
    title: z.string({
        required_error: "A post requires its title to be provided",
    }),
    content: z.string({
        required_error: "A post requires its content to be provided"
    }),
    userId: z.number(),
    date: z.string().default((new Date()).toISOString()),
    reactions: z.object({
        thumbsUp: z.number().default(0),
        wow: z.number().default(0),
        heart: z.number().default(0),
        rocket: z.number().default(0),
        coffee: z.number().default(0)
    })
});

export const postsSchema = z.object({
    status: z.string(),
    error: z.string().optional(),
    posts: z.array(
        postSchema
    )
});

export const postFormSchema = z.object({
    title: z.string({
        required_error: "A post requires its title to be provided",
    }),
    content: z.string({
        required_error: "A post requires its content to be provided"
    }),
    userId: z.string(),
});

const postApiSchema = z.object({
    userId: z.string(),
    id: z.string(),
    title: z.string(),
    body: z.string()
});

export type PostApiResponse = z.infer<typeof postApiSchema>;
export type PostValues = z.infer<typeof postSchema>;
export type PostFormValues = z.infer<typeof postFormSchema>;
export type PostsValues = z.infer<typeof postsSchema>;