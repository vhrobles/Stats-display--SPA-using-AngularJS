'use strict';

angular.module('myApp.default', ['ngRoute'])

    .config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://www.victor-robles.com/**'
        ]);
        $routeProvider.when('/views/default', {
            templateUrl: 'http://www.victor-robles.com/tmn/views/default.html',
            controller: 'DefaultCtrl'
        });
    }])

    .controller('DefaultCtrl', [function() {

    }]);
