import {
  configureWunderGraphApplication,
  cors,
  EnvironmentVariable,
  introspect,
  templates,
} from "@wundergraph/sdk";
import server from "./wundergraph.server";
import operations from "./wundergraph.operations";

console.log("test 11 " + process.env.WG_OTEL_AUTH_TOKEN)
console.log("foo 11 " + process.env.FOO)

const spacex = introspect.graphql({
  apiNamespace: "spacex",
  url: 'https://spacex-api.fly.dev/graphql',
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
  apis: [spacex],
  server,
  operations,
  codeGenerators: [
    {
      templates: [
        ...templates.typescript.all,
      ],
    },
  ],
  cors: {
    ...cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === "production"
        ? [
            // change this before deploying to production to the actual domain where you're deploying your app
            "http://localhost:3000",
          ]
        : [
            "http://localhost:3000",
            new EnvironmentVariable("WG_ALLOWED_ORIGIN"),
          ],
  },
  dotGraphQLConfig: {
    hasDotWunderGraphDirectory: false,
  },
});
