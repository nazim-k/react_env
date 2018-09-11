#!/usr/bin/env node
(function() {
    'use strict';

    const createDirs = require('./create-files/create-dirs'),
        createEditorConf = require('./create-files/create-editor-conf'),
        createGitIgnore = require('./create-files/create-gitignore'),
        createAppComponent = require('./create-files/create-app-component'),
        createMainComponent = require('./create-files/create-main-component'),
        createMainHtml = require('./create-files/create-main-html'),
        createMainCss = require('./create-files/create-main-css'),
        createServer = require('./create-files/create-server'),
        createWebpack = require('./create-files/create-webpack'),
        packageModifier = require('./modifiers/package-modifier'),
        installer = require('./modifiers/installer'),
        config = require('./modifiers/create-config');

    createDirs()
        .then(res => {
            if (!res) console.info('all folders already exists');
            else console.info(res);
            return createEditorConf();
        })
        .then(res => {
            console.info(res);
            return createGitIgnore();
        })
        .then(res => {
            console.info(res);
            const app = createAppComponent(config.b),
                main = createMainComponent(config.r);
            return Promise.all([app, main]);
        })
        .then(res => {
            console.info(res);
            if (config.b === true) {
                return createMainHtml(true)
            } else {
                const h = createMainHtml(false),
                    c =createMainCss();
                return Promise.all([h, c])
            }
        })
        .then(res => {
            console.info(res);
            return createServer(config.port);
        })
        .then(res => {
            console.info(res);
            return createWebpack(config.b);
        })
        .then(res => {
            console.info(res);
            return packageModifier();
        })
        .then(data => {
            console.log(data);
            console.info('installing express...');
            return installer(config.b, config.r);
        })
        .then(data => {
            console.log('RESULT ', data);
        })
        .catch( err => {
            console.error(err.name, err.message, err.stack);
        });
}());