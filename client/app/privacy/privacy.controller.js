'use strict';

angular.module('resumeApp')
  .controller('PrivacyCtrl', function ($scope, $state) {
    $scope.message = 'Hello';
    $scope.goHome = function() {
    	$state.go('main')
    };
  });
