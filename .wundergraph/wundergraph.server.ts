import { configureWunderGraphServer } from "@wundergraph/sdk/server";
import type { HooksConfig } from "./generated/wundergraph.hooks";
import type { InternalClient } from "./generated/wundergraph.internal.client";

export default configureWunderGraphServer<HooksConfig, InternalClient>(() => ({
  hooks: {
    queries: {
      Dragons: {
        postResolve: async (hook) => {
          hook.log.info("postResolve hook for Dragons");
          console.log("test 11 " + process.env.WG_OTEL_AUTH_TOKEN)
          console.log("foo 11 " + process.env.FOO)
        },
      },
    },
    mutations: {},
  }
}));
