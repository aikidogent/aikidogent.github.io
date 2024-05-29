import {
  createGetNewPath,
  createTranslationConfig,
} from "@codana/translatable-routes";

export const availableLocales = ["nl", "en"] as const;
export const routeConfig = createTranslationConfig(availableLocales, "nl", {
  "/": "/",
});

export const getPath = createGetNewPath(routeConfig);
