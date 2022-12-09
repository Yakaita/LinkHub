import { router } from "../trpc";
import { authRouter } from "./auth";
import { shortLinkRouter } from "./short-link-router";

export const appRouter = router({
    auth: authRouter,
    shortLinks: shortLinkRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
