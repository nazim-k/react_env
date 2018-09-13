module.exports = (function() {
    'use strict';
    const config = {
            b: false,
            r: false,
            dev_mode: false,
            port: 3000
        },
        { argv } = process;
    if (!!~argv.indexOf('-b')) {
        config.b = true;
    }
    if (!!~argv.indexOf('-r')) {
        config.r = true;
    }
    if (!!~argv.indexOf('--dev')) {
        config.dev_mode = true;
    }
    if (!!~argv.indexOf('--port')) {
        var port = argv[argv.indexOf('--port')+1];
        if (Number(port)) {
            config.port = Number(port);
        }
    }

    return config
}());