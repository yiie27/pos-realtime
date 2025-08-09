import z from "zod";

export const loginSchemaForm = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export const createUserSchemaForm = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  // avatar_url: z.union([
  //   z.string().min(1, "Image URL is required"),
  //   z.instanceof(File),
  // ]),
});

// cara 1
// export type LoginForm = {
//   email: string;
//   password: string;
// };

// cara 2
export type LoginForm = z.infer<typeof loginSchemaForm>;
export type CreateUserForm = z.infer<typeof createUserSchemaForm>;
