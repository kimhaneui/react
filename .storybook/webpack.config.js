module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.stories\.tsx?$/,
        loaders: [
            {
                loader: require.resolve("@storybook/source-loader"),
                options: { parser: "typescript" },
            },
        ],
        enforce: "pre",
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
