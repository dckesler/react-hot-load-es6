var webpack = require('webpack');
var os = require('os');

module.exports = {
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons'),
        new webpack.HotModuleReplacementPlugin()
    ],

    entry: [
        'webpack-dev-server/client?http://' + os.hostname() + ':3000',
        'webpack/hot/dev-server',
        './react/App.jsx'
    ],

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.styl']
    },

    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'react-hot!babel', exclude: [/node_modules/] },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.css$/, loader: "style!css"}
        ]
    },

    devtool: 'eval'
};