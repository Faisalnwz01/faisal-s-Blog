'use strict';
(function() {

function MainController($scope, $rootScope, $timeout, $location, $anchorScroll, $http, $sce) {
  $scope.colorContainer = false;
  console.log($location.path())
  $scope.openColorChanger = function() {
      return $scope.colorContainer = !$scope.colorContainer;
  }
  $rootScope.colors = "css/blue.css";
  $scope.changeColor = function(e) {
      $rootScope.colors = e;
  }
  $rootScope.menu = false;
  $scope.dataLoad = function() {
      $scope.loader = true;
      $timeout(function() {
          $scope.loader = false;

      }, 600);
  }
  $scope.closeMenu = function() {
      leftSide.addClass('closeMobileMenu')
      leftSide.removeClass('openMobileMenu')
  }

  var loads = angular.element(document.querySelector('.loads'));
  $scope.loader = true;
  $timeout(function() {
      loads.css({
          'height': '220px',
          'z-index': 0,
          'opacity': 0
      })
      $scope.loader = false;
  }, 600)

  var leftSide = angular.element(document.querySelector('.left-side'));
  $scope.openMenu = function() {
      leftSide.addClass('openMobileMenu')
      leftSide.removeClass('closeMobileMenu')
  }

  $scope.closeItem = function() {
      $rootScope.menu = false;
      $location.path('/').hash('')
  }
  $rootScope.blog = true;
  $scope.itemone = false;
  $timeout(function() {
      $scope.itemone = true;
  }, 250);
  $scope.itemtwo = false;
  $timeout(function() {
      $scope.itemtwo = true;
  }, 450);
  $scope.loadCont = function(e) {

      $location.path('/').hash('')
      $scope.loader = true;
      $timeout(function() {
          $scope.loader = false;
      }, 600);
      $rootScope.menu = false;
      $rootScope.views = e;
      $scope.itemone = false;
      $timeout(function() {
          $scope.itemone = true;
      }, 250);
      $scope.itemtwo = false;
      $timeout(function() {
          $scope.itemtwo = true;
      }, 450);
      // $scope.$apply();
      console.log(e)
  }


  // Portfolio get json files
  $http.get('json/portfolio.json')
      .then(function(res) {
          $scope.mainpPortfolio = res.data.portfolio;
          $scope.mainBlog = res.data.blog;
      });
}

angular.module('resumeApp')
  .controller('MainController', MainController);

})();
