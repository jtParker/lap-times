angular.module('timeTracker')

  .service('authService', function($q, $window, $firebaseAuth, FBURL) {

    var ref = new Firebase(FBURL);


    this.user = ref.getAuth();



    var saveUser = function(userObj) {
      ref.child('users').child(userObj.id).set({
          provider: authData.provider,
          name: authData.facebook.displayName
    });
  };

    this.isLoggedIn = function() {
      return !!ref.getAuth();
    };

    this.loginWithPW = function(userObj, cb, cbOnReg) {
      ref.authWithPassword(userObj, function(err, authData) {
        if(err){
          console.log('Error')
        } else {
          authData.email = userObj.email;
          this.user = authData;
          cb(authData);
          cbOnReg && cbOnReg(true);
        }
      }.bind(this));
    };

    this.createUser = function(user, cb) {
      ref.createUser(user, function(error, userData) {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
            console.log("The new user account cannot be created because the email is already in use.");
            break;
            case "INVALID_EMAIL":
            console.log("The specified email is not a valid email.");
            break;
            default:
            console.log("Error creating user:", error);
          }
        } else {
          this.loginWithPW(user, function(authData){
            saveUser();
          }, cb);
        }
      }.bind(this));
    };


    this.loginWithFB = function() {
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    }

    this.logout = function() {
        ref.unauth();
        $window.alert('You have successfully logged out.');
      };

    
  });













  //   this.fbLogin = function() {
  //     var defer = $q.defer();
  //     ref.authWithOAuthPopup("facebook", function(error, authData) {
  //       if (error) {
  //         console.log("Login Failed!", error);
  //       } else {
  //         console.log("Authenticated successfully with payload:", authData);
  //       }
  //     }).then(function(authData) {
  //         defer.resolve(authData);
  //           ref.child("users").child(authData.uid).set({
  //             provider: authData.provider,
  //             name: authData.facebook.displayName
  //           });
  //
  //     })
  //     return defer.promise;
  //   };
  //
  //   this.logout = function() {
  //     ref.unauth();
  //     $window.alert('You have successfully logged out.');
  //   };
  //
  //
  //   this.getUser = function() {
  //     ref.getAuth().then(function(response) {
  //       defer.resolve(response);
  //     })
  //   }
  //
  // });
