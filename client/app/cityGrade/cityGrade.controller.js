'use strict';

angular.module('resumeApp')
  .controller('CityGradeCtrl', function ($scope, $state) {
    $scope.message = 'Hello';
    $scope.closeItem = function() {
    	$state.go('main')
    };
  });
