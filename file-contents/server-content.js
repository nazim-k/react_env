module.exports = (function() {
    return function(port) {
        return `
'use strict';

const express = require('express'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require('./webpack.config'),
    compiler = webpack(config),
    app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./src'));
app.use(express.static('./node_modules'));

app.listen(3000, () => {
    console.log('server started on port ${port}. Wait webpack bundle')
});
    `.trim()
    }
}());