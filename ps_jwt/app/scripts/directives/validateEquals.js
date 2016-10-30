'use strict';

/**
 * @ngdoc directive
 * @name psJwtApp.directive:validateEquals
 * @description validate Equals
 * # validateEquals
 */
angular.module('psJwtApp')
    .directive('validateEquals', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                function validateEqual(value) {
                    var valid = (value === scope.$eval(attrs.validateEquals));
                    ngModelCtrl.$setValidity('equal', valid);
                    return valid ? value : undefined;
                }

                ngModelCtrl.$parsers.push(validateEqual);
                ngModelCtrl.$formatters.push(validateEqual);

                scope.$watch(attrs.validateEuals, function () {
                    ngModelCtrl.$setViewValue(ngModelCtrl.$setViewValue);
                });
            }
        };
    });
