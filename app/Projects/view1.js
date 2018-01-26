'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Projects', {
    templateUrl: 'Projects/Projects.html',
    controller: 'projcontrol'
  });
}])

.controller('projcontrol', [function() {

}]);