angular.module('timeTracker')

    .controller('mainCtrl', function($scope, FBURL, authService, lapService, $firebaseAuth, $firebaseArray, $timeout) {

      var ref = new Firebase("https://lap-time-tracker.firebaseio.com");
      var lapRef = new Firebase("https://lap-time-tracker.firebaseio.com/East");
      var auth = $firebaseAuth(ref);
      $scope.lapEast = $firebaseArray(lapRef);


      // var eastRef = new Firebase('https://lap-time-tracker.firebaseio.com/lapTimes/East/');
      // var eastLapRef = eastRef.child('racer');
      $scope.loggedIn = false;
      $scope.auth = authService;
      $scope.lap = '';
      $scope.showSuccess = false;

      var authData = ref.getAuth();

      if(authData) {
        $scope.loggedIn = true;
        $scope.lap.racer = authData.facebook.displayName;
      }

      $scope.showMessage = function() {
        $scope.success = 'Lap time added!'
        $timeout(function() {
          $scope.showSuccess = true;
        }, 3000);
      }

      $scope.addTime = function(authdata) {
        $scope.lap.racer = authData.facebook.displayName;
        var lapTime = $scope.lap;
          lapService.enterLapTime(lapTime)
            $scope.lap = '';
            $scope.showMessage();
      };

    });
