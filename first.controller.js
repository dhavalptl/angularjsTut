(function(){
    'use strict';
    angular.module('app')
    .controller('FirstController', FirstController);
    FirstController.$inject = ['firstService', '$location'];

    /* @ngInject */
    function FirstController(firstService, $location){
        var first = this;
        first.title = "People Page";
        first.people = [];
        first.goToSecondPage = goToSecondPage;

        activate();

        function activate(){
            firstService.getPeople()
                .then(function(data){
                    first.people = data;
                });
        }

        function goToSecondPage(){
            $location.path('/second');
        }
    }
})();