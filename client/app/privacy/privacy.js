'use strict';

angular.module('resumeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('privacy', {
        url: '/privacy',
        templateUrl: 'app/privacy/privacy.html',
        controller: 'PrivacyCtrl'
      });
  });
