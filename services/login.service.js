(function() {
    velocityExercise.service('LoginService', function($q, $http) {
        var mockCredential = {
          user: "peter",
          pass: "pass",
          name: "Peter Hoang",
          avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
        }

        var authenticatedCredential = {
          "user": "",
          "pass": ""
        };

        var isAuthenticated = false;

        var isAuthenticate = function(user, pass) {

          if (user === mockCredential.user && pass === mockCredential.pass) {
            isAuthenticated = true;

            setAuthenticatedCredentials(user, pass);
            return isAuthenticated;
          }
        }

          var setAuthenticatedCredentials = function() {
            angular.copy(mockCredential, authenticatedCredential);
          }

          var getAuthenticatedCredential = function() {
            return authenticatedCredential;
          }

          return {
            isAuthenticated: isAuthenticate,
            getAuthenticatedCredential: getAuthenticatedCredential
          }

        });
    })()
    