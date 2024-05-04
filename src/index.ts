import { createRoute } from "@hono/zod-openapi";
import { ParamsSchema, ReqDescription } from "./inputs";
import { UserSchema, ResDescriptionSchema } from "./outputs";
import { OpenAPIHono } from "@hono/zod-openapi";

const getUserRoute = createRoute({
  method: "get",
  path: "/user/{id}",
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: UserSchema,
        },
      },
      description: "This is a getuser route",
    },
  },
});

const getUserDescription = createRoute({
  method: "get",
  path: "/user/{id}",
  request: {
    params: ReqDescription,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ResDescriptionSchema,
        },
      },
      description: "This is a getuser route",
    },
  },
});

const app = new OpenAPIHono();

app.openapi(getUserRoute, (c) => {
  const { id } = c.req.valid("param");
  return c.json({
    id,
    age: 20,
    name: "Vibhor Phalke",
  });
});

app.openapi(getUserDescription, (c) => {
  const { id } = c.req.valid("param");
  return c.json({
    id,
    age: 20,
    name: "Vibhor Phalke",
    description: "This is gonna be the best day of my life ok ???",
  });
});

export default app;
