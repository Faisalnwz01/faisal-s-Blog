'use strict';

angular.module('resumeApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ngMaterial',
        'ngAnimate'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .run(function($rootScope) {
        $rootScope.colors = "css/blue.css";
    })
