declare const availableLocales: readonly ["nl", "en"];
declare const routeConfig: {
    availableLocales: readonly ["nl", "en"];
    defaultLocale: "nl" | "en";
    pathNames: {
        [x: string]: string | {
            nl: string;
            en: string;
        };
    };
    rewrites: {
        source: string;
        destination: string;
        locale: false | undefined;
    }[];
};
declare const getPath: (destination: string, queryParams?: {
    [x: string]: string;
} | undefined, locale?: "nl" | "en" | undefined) => string;

export { availableLocales, getPath, routeConfig };
