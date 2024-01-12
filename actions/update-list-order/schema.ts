import { z } from "zod";
export const UpdateListOrder = z.object({
  items: z
    .array(z.object({ id: z.string(), title: z.string() ,order: z.number(),createdAt: z.date(),updatedAt: z.date()}))
    .min(3, { message: "title is too short" }),

  boardId: z.string(),
});
