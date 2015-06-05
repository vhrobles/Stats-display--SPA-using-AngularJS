'use strict';

angular.module('myApp.detail', ['ngRoute', 'ngResource'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/detail/:id/:img/:name', {
            templateUrl: 'http://www.victor-robles.com/tmn/views/detail.html',
            controller: 'DetailCtrl'
        });
    }])
    .factory('JsonAPI', ['$resource',
        function($resource){
            return $resource('http://www.victor-robles.com/tmn/data/:id.txt', {}, {
                query: {method:'GET', params:{id:'id'}, isArray:true}
            });
        }])
    .controller('DetailCtrl', ['$scope', '$http', '$routeParams', '$resource', 'JsonAPI', function($scope, $http, $routeParams, $resource, $JsonAPI) {
        var id = $routeParams.id;
        $scope.playerId =  id;
        $scope.img = $routeParams.img;
        $scope.limit = 10;
        $scope.name = $routeParams.name;


        $JsonAPI.get({id: $scope.playerId}, function (data) {
            $scope.games = data.games;
            $scope.playerImage = data.games[0].teamImage;
            totalRecords = data.games.length;
        });

        $scope.loadMore = function () {
            if($('.load-more a').html() == 'Show less') {
                $scope.limit = 10;
                $('.load-more a').html('Show more');
                $("html, body").animate({ scrollTop: '300px' }, "slow");
            }else {
                $scope.limit += 10;
                $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                if ($scope.limit > $scope.games.length) {
                    $('.load-more a').html('Show less');
                }
            }
        }


    }]);