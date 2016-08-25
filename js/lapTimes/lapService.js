angular.module('timeTracker')

  .service('lapService', function(FBURL, $firebaseArray) {

    var lapRefEast = $firebaseArray(new Firebase(FBURL + '/East'));
    this.lapRefWest = $firebaseArray(new Firebase(FBURL + '/West'));
    this.lapRefFull = $firebaseArray(new Firebase(FBURL + '/Full'));

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
