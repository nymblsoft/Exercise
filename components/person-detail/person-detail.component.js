angular.
module('velocityExercise').
component('personDetail', {
  templateUrl: 'components/person-detail/person-detail.template.html',
  controller: ['$routeParams', 'PeopleService', '$scope',
    function PersonDetailController($routeParams, PeopleService, $scope) {
      $scope.personId = $routeParams.personId;
      self=$scope;
      getPeople();

      //rating:
        self.rating = {max:5};
    

    $scope.getSelectedRating = function (rating) {
        console.log(rating);
    }

      function getPeople() {
        PeopleService.getAll()
          .then(function(response) {
            self.people = response.data.People;
            self.person = self.people.filter(o => o.name == self.personId)[0];
            self.rating.currentVal=self.person.rating;
            

          }, function(error) {
            $scope.status = 'Unable to load data: ' + error.message;
          });
      }
    }
  ]
});