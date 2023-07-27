import { z } from "zod";

export const registerCompanySchema = z
  .object({
    name: z
      .string()
      .nonempty("This field is required")
      .max(100, "First name should not exceed 100 characters"),
    email: z
      .string()
      .nonempty("This field is required")
      .email("Invalid email format")
      .min(5, "Email should be at least 5 characters long")
      .max(100, "Email should not exceed 100 characters"),
    password: z
      .string()
      .nonempty("This field is required")
      .min(8, "Password should be at least 8 characters long")
      .max(50, "Password should not exceed 50 characters"),
    confirmPassword: z.string().nonempty("This field is required"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const registerCustomerSchema = z
  .object({
    firstName: z
      .string()
      .nonempty("This field is required")
      .max(100, "First name should not exceed 100 characters"),
    lastName: z
      .string()
      .nonempty("This field is required")
      .max(100, "Last name should not exceed 100 characters"),
    email: z
      .string()
      .nonempty("This field is required")
      .email("Invalid email format")
      .min(5, "Email should be at least 5 characters long")
      .max(100, "Email should not exceed 100 characters"),
    password: z
      .string()
      .nonempty("This field is required")
      .min(4, "Password should be at least 4 characters long")
      .max(50, "Password should not exceed 50 characters"),
    confirmPassword: z.string().nonempty("This field is required"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
