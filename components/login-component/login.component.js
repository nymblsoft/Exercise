angular.
  module('velocityExercise').
  component('login', {
    templateUrl: 'components/login-component/login.template.html',
    controller: function LoginController($scope, $rootScope, $routeParams, $location, LoginService){
      $scope.username='peter';
      $scope.password='pass';
      
    
      $scope.formSubmit = function() {
        var slsls = LoginService.isAuthenticated($scope.username, $scope.password);
        if(LoginService.isAuthenticated($scope.username, $scope.password)) {
          $scope.error = '';
          $scope.username = '';
          $scope.password = '';
          $location.path('main');
        } else {
          $scope.error = "Incorrect username/password !";
        }   
      };
    }
  })