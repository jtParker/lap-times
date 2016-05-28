angular.module('timeTracker')

    .controller('mainCtrl', function($scope, FBURL, authService, lapService, $firebaseAuth, $firebaseArray) {

      var ref = new Firebase("https://lap-time-tracker.firebaseio.com");
      var lapRef = new Firebase("https://lap-time-tracker.firebaseio.com").child("laptimes");
      var auth = $firebaseAuth(ref);


      // var eastRef = new Firebase('https://lap-time-tracker.firebaseio.com/lapTimes/East/');
      // var eastLapRef = eastRef.child('racer');
      $scope.loggedIn = false;
      $scope.auth = authService;
      $scope.lap = '';

      $scope.lapEast = $firebaseArray(lapRef);


      var authData = ref.getAuth();

      if(authData) {
        $scope.loggedIn = true;
        $scope.lap.racer = authData.facebook.displayName;
      }

      $scope.addTime = function(authdata) {
        $scope.lap.racer = authData.facebook.displayName;
        var lapTime = $scope.lap;
          lapService.enterLapTime(lapTime)
            $scope.lap = '';
            $scope.success = 'Lap time added!'
      };

    });
