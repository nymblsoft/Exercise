angular.
module('velocityExercise').
component('mainPanel', {
  templateUrl: 'main-panel.template.html',
  controller: function MainPanelController($scope, $http, $routeParams, LoginService, PeopleService) {
    var self = this;
    self.query="";
    self.personId = $routeParams.personId;
   
    getPeople();

    function getPeople() {
      PeopleService.getAll()
        .then(function(response) {
          self.people = response.data.People;
        }, function(error) {
          $scope.status = 'Unable to load data: ' + error.message;
        });
    }
  }
});