var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    person1 = {
      name: 'Tim',
      email: 'tim@email1.com',
      number: '111 111 1111'
    };

    person2 = {
      name: 'Emily',
      email: 'Emily@email1.com',
      number: '222 111 1111'
    };

    person3 = {
      name: 'John',
      email: 'john@email1.com',
      number: '(333) 333-3333'
    };

    var contactlist = [person1, person2, person3];
    $scope.contactlist = contactlist;
}]);
