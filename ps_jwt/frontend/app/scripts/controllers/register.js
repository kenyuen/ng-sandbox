'use strict';

/**
 * @ngdoc function
 * @name psJwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the psJwtApp
 */
angular.module('psJwtApp')
    .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
        $scope.submit = function () {
            
            var url ='/';
            var user = {};
            
            $http.post(url, user)
                .success(function(res) {
                    alert('success','OK!','You are now registered');
                })
                .error(function(err) {
                    alert('warning','Opps!','Could not register');
                });
        };
    });
