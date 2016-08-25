
var app = angular.module('timeTracker', ['ui.router', 'firebase']);

app.constant('FBURL', 'https://lap-time-tracker.firebaseio.com');


app.config([
  '$stateProvider',
  '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/leaderboards');

    $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: './views/login.html',
      controller: 'authCtrl'
    })

    .state('leaderboards', {
      url: '/leaderboards',
      templateUrl: './views/leaderboards.html',
      controller: 'mainCtrl'
    })

    .state('myTimes', {
      url: '/my-times',
      templateUrl: './views/myTimes.html',
      controller: 'mainCtrl'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: './views/profile.html',
      controller: 'mainCtrl'
    })
  }

]);
