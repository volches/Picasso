const config = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        menu: './src/js/menu.js',
        innerPage: './src/js/innerPage.js'
        // about: './src/js/about.js',
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};



module.exports = config;