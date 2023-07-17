import * as z from "zod";


export const postFormSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    user: z.optional(z.string()),
    date: z.date({
        required_error: "A date of creation is required.",
    }),
    reactions: z.object({
        thumbsUp: z.number().default(0),
        wow: z.number().default(0),
        heart: z.number().default(0),
        rocket: z.number().default(0),
        coffee: z.number().default(0),
    })
});

const postReactionSchema = z.object({
    postId: z.string(),
    reaction: z.string()
});

export const enum ReactionType
{
    ThumbsUp = "thumbsUp",
    Wow = "wow",
    Heart = "heart",
    Rocket = "rocket",
    Coffee = "coffee"
}

export type PostReactionType = z.infer<typeof postReactionSchema>;
export type PostFormValues = z.infer<typeof postFormSchema>;