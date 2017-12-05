(function(){
    'use strict';
    angular.module('app')
    .service('firstService', firstService);

    firstService.$inject = ['$http', '$q'];
    function firstService($http, $q){
        var service = {
            getPeople: getPeople
        };
        return service;
    
        function getPeople(){
           return $http.get('people.json')
            .then(getPeopleComplete)
            .catch(getPeopleFailure);

            function getPeopleComplete(data, status, headers, config){
                return data.data.people;
            }

            function getPeopleFailure(e){
                console.error(e);
                return $q.reject(e);
            }
        }
    }    
})();