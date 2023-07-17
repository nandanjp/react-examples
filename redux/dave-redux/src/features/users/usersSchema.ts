import * as z from "zod";

export const usersFormSchema = z.object({
    id: z.string(),
    name: z.string()
});

export type UsersFormValues = z.infer<typeof usersFormSchema>;