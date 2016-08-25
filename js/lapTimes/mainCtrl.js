angular.module('timeTracker')

    .controller('mainCtrl', function($scope, authService, lapService, lapTimes, $firebaseAuth, $firebaseArray, $timeout, $state) {

      var authData = authService;

      $scope.loggedIn = false;
      $scope.auth = authService;
      $scope.laps = lapTimes;
      $scope.showSuccess = false;
      $scope.showError = false;
      $scope.lap = '';

      if(!authData.user) {
        return;
        } else {
            $scope.loggedIn = true;
            $scope.user = authData.user.facebook.displayName;
            $scope.lap.racer = $scope.user;
            $scope.userPic = authData.user.facebook.profileImageURL;
          };

      $scope.showMessage = function() {
        $scope.success = 'Lap time added!'
        $timeout(function() {
          $scope.showSuccess = true;
        }, 3000);
      };

      $scope.addTime = function(authdata) {
        $scope.error = 'Please enter a time!';
        if ($scope.lap === '') {
          $timeout(function () {
            $scope.showError = true;
          }, 3000);
        } else {
        $scope.lap.racer = authData.user.facebook.displayName;
        var lapTime = $scope.lap;
          lapService.enterLapTime(lapTime);
            $scope.showMessage();
            $scope.lap = '';
          };
      };

      $scope.logout = function() {
        authData.logout();
        $scope.loggedIn = false;
        $state.go('leaderboards');

      };

    });
