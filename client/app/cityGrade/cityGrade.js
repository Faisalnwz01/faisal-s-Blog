'use strict';

angular.module('resumeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cityGrade', {
        url: '/citygrade',
        templateUrl: 'app/cityGrade/cityGrade.html',
        controller: 'CityGradeCtrl'
      });
  });
