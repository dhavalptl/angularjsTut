(function(){
    'use strict';
    angular.module('app')
    .service('secondService', secondService);

    secondService.$inject = ['$http', '$q'];
    function secondService($http, $q){
        var service = {
            getCountry: getCountry
        };
        return service;
    
        function getCountry(){
           return $http.get('country.json')
            .then(getCountryComplete)
            .catch(getCountryFailure);

            function getCountryComplete(data, status, headers, config){
                return data.data.countries;
            }

            function getCountryFailure(e){
                console.error(e);
                return $q.reject(e);
            }
        }
    }    
})();