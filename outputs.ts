import { z } from "@hono/zod-openapi";

export const UserSchema = z.object({
  name: z.string().min(1).max(15).openapi({
    example: "Vibhor",
  }),
  age: z.number().min(1).max(15).openapi({
    example: 12,
  }),
  id: z.string().min(1).max(10).openapi({
    example: "123",
  }),
});

export const ResDescriptionSchema = z.object({
  name: z.string().min(1).max(15).openapi({
    example: "Vibhor",
  }),
  age: z.number().min(1).max(15).openapi({
    example: 12,
  }),
  id: z.string().min(1).max(10).openapi({
    example: "123",
  }),
  description: z.string().min(1).max(200).openapi({
    example:
      "This is gonna be the best day of my life. Tu Tu Tu Tu Tu do ooodddd",
  }),
});
