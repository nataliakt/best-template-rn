module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            // Application
            hooks: "./src/application/hooks",
            reducers: "./src/application/reducers",
            stores: "./src/application/stores",
            utils: "./src/application/utils",
            // Domain
            entities: "./src/domain/entities",
            enums: "./src/domain/enums",
            // Infrastructure
            api: "./src/infrastructure/api",
            // Presentation
            assets: "./src/presentation/assets",
            components: "./src/presentation/components",
            navigation: "./src/presentation/navigation",
            screens: "./src/presentation/screens",
          },
        },
      ],
    ],
  };
};
