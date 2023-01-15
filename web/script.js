requirejs.config({
    baseUrl: '/',
    paths: {
        'handlers': 'handlers',
        'components': 'components',
        'jquery': '//code.jquery.com/jquery-3.6.3.min'
    }
});

define([
    'jquery'
], function() {
    requirejs(['components/App/App']);
});

feather.replace();
