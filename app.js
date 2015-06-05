
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.default',
    'myApp.detail'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            otherwise({redirectTo: '/views/default'});
    }]);

