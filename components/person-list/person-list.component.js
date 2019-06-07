angular.
module('velocityExercise').
component('personList', {
  templateUrl: 'components/person-list/person-list.template.html',
  bindings: {
    data: '='
  },
  controller: function PersonListController($scope, PeopleService) {
    var self = this;

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
