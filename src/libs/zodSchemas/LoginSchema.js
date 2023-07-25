import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("this field is required")
    .email("Invalid email format")
    .min(5, "Email should be at least 5 characters long")
    .max(100, "Email should not exceed 100 characters"),
  password: z
    .string()
    .nonempty("this field is required")
    .min(4, "Password should be at least 4 characters long")
    .max(50, "Password should not exceed 50 characters"),
  clientType: z.enum(["CUSTOMER", "COMPANY", "ADMIN"]),
});

export default loginSchema;
