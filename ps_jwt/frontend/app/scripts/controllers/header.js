'use strict';

angular.module('psJwtApp')
  .controller('headerCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated();
  });
