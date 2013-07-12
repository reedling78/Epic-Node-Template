/*global $, require, io*/

(function() {
    'use strict';

    require.config({
        baseUrl: '/js',
        packages: [{
            name: "jquery",
            location: "./libs",
            main: "jquery-1.10.1"
        }, {
            name: "jquery.ui",
            location: "./libs",
            main: "jquery-ui-1.10.3.custom.min"
        }, {
            name: "socket.io",
            location: "./libs",
            main: "socket.io-0.9.11"
        }]
    });

    require(['jquery', 'socket.io', 'jquery.ui'], function ($) {

        $('#jquery').html('jquery loaded');
        $('button').button();

        io.connect('http://localhost:3000').on('send test', function (data) {
            $('#socketio').html(data.msg);
        });

    });

}());