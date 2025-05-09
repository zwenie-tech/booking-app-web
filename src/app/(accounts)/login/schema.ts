import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "Required" }),
  password: z.string().min(1, { message: "Required" }),
});

// export interface LoginSchema extends z.infer<typeof loginSchema> {}
export type LoginSchema = z.infer<typeof loginSchema>;
