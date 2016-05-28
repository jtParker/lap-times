angular.module('timeTracker')

  .service('lapService', function(FBURL, $firebaseArray) {

    var ref = new Firebase(FBURL);
    var lapRefEast = $firebaseArray(new Firebase(FBURL + '/lapTimes/East'));
    var lapRefWest = $firebaseArray(new Firebase(FBURL + '/lapTimes/West'));
    var lapRefFull = $firebaseArray(new Firebase(FBURL + '/lapTimes/Full'));


    this.enterLapTime = function(lapTime) {
      if (lapTime.track === 'East Track') {
        lapRefEast.$add(lapTime);
      }
      else if (lapTime.track === 'West Track') {
        lapRefWest.$add(lapTime);
      }
      else {
        lapRefFull.$add(lapTime);
      };
    };



  });