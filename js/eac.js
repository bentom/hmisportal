"use strict";

!(function() {
    var app = angular.module('eac-app', ['ngRoute']);

    app.config(function( $routeProvider, $locationProvider ) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'fragments/dashboard.html'
        });
        $routeProvider.when('/datacoverage', {
            templateUrl: 'fragments/datacoverage.html'
        });
        $routeProvider.when('/malaria', {
            templateUrl: 'fragments/malaria.html'
        });
        $routeProvider.when('/test', {
            templateUrl: 'fragments/test.html'
        });
        $routeProvider.when('/immunization', {
            templateUrl: 'fragments/immunization.html'
        });
        $routeProvider.when('/hivaids', {
            templateUrl: 'fragments/hivaids.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    });

    app.controller('NavCtrl', function( $scope, $location ) {
        $scope.isActive = function( path ) {
            return path == $location.path();
        }
    });
})();
