angular.
  module('velocityExercise').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/login', {
          template: '<login></login>'
        }).
        when('/main', {
          template: '<main-panel></main-panel>'
        }).
        when('/main/:personId', {
          template: '<main-panel></main-panel>'
        }).
        otherwise('/login');
    }
  ]);