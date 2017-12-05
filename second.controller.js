(function(){
    'use strict';
    angular.module('app')
    .controller('SecondController', SecondController);
    SecondController.$inject = ['secondService','$location'];

    /* @ngInject */
    function SecondController(secondService, $location){
        var second = this;
        second.title = "Country Page";
        second.countries = [];
        second.goToFirstPage = goToFirstPage;

        activate();

        function activate(){
            secondService.getCountry()
            .then(function(data){
                second.countries = data;
            })
        }

        function goToFirstPage(){
            $location.path('/first');
        }
    }
})();