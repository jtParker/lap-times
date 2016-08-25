angular.module('timeTracker')

    .controller('authCtrl', function($scope, $state, $location, authService) {

      $scope.user = {};

      $scope.login = function() {
        userObj = {
          email: $scope.user.email,
          password: $scope.user.pw
        };


        $scope.user.email = '';
        $scope.user.pw = '';

        authService.loginWithPW(userObj, function() {
          $state.go('myTimes');
        });
      };

      $scope.loginFB = function() {
        authService.loginWithFB();
          $state.go('myTimes');
      };

      $scope.logout = function() {
        authService.logout();
          $state.go('leaderboards');
      };






      // $scope.appUser = {};
      //
      // $scope.facebookLogin = function() {
      //   authService.fbLogin().then(function(authData) {
      //     $scope.appUser = authData;
      //   })
      // };
      //
      // $scope.logout = function() {
      //   authService.logout();
      // }
      //
      // $scope.getUser = function() {
      //   authService.getUser();
      // };





    })
