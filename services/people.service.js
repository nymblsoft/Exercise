angular.
  module('velocityExercise').
  factory('PeopleService', ['$http',
    function($http) {
      var data = {};
      
      data.getAll = function(){
        return $http.get('data/people.json');
      }
      return data;
    }    
  ]);
