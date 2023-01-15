requirejs.config({
    baseUrl: '/',
    paths: {
        'handlers': 'handlers',
        'components': 'components',
        'jquery': 'node_modules/jquery/dist/jquery'
    }
});

define([
    'jquery'
], function() {
    requirejs(['components/App/App']);
});

feather.replace();
