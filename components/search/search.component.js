angular.
module('velocityExercise').
component('search', {
  templateUrl: 'components/search/search.template.html',
   bindings:{
    data : '='
  },
  controller: function SearchController($scope, LoginService) {
    var self = this;
    this.authenticatedCredential = LoginService.getAuthenticatedCredential();
  }
});