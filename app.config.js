(function(){
    'use strict';
    angular.module('app')
    .config(config);

    config.$inject = ['$locationProvider', '$routeProvider'];

    function config($locationProvider, $routeProvider){
        $routeProvider
        .when('/first', {
            templateUrl: 'first.html',
            controller: 'FirstController',
            controllerAs: 'first'
        })
        .when('/second', {
            templateUrl: 'second.html',
            controller: 'SecondController',
            controllerAs: 'second'
        })
        .otherwise('/first');
    }
})();