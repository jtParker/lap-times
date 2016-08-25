angular.module('timeTracker')

    .factory('lapTimes', function(FBURL, $firebaseArray) {

      var lapRef = new Firebase(FBURL + '/East');

      return $firebaseArray(lapRef);


    });
