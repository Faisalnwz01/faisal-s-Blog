'use strict';

describe('Controller: CityGradeCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeApp'));

  var CityGradeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CityGradeCtrl = $controller('CityGradeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
