import { z } from "zod";
import { loginFormSchema } from "./auth.schemas";

export type ILoginFormType = z.infer<typeof loginFormSchema>;

export type ICurrentApiResponse = {
  //   role: IRoleType | "User";
  token: string;
  token_type: string;
  //   user: IUserType;
};
