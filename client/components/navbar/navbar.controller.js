'use strict';

angular.module('resumeApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    }];

    $scope.isCollapsed = true;
  });
