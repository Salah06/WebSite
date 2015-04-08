'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .controller("AppCtrl", function ($scope, $http) {
    $http.get('data/webInfo.json').
      success(function(data, status, headers, config) {
        $scope.posts = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl'
      })
      .when('/professional_experience', {
        templateUrl: 'views/profExperience.html',
        controller: 'ProfCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

