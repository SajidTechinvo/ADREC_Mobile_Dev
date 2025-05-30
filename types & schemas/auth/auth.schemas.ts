import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: "Please add your email!" }),
  password: z.string().min(1, { message: "Please add password!" }),
});
