var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

$http.get('/contactlist').then(successCallback, errorCallback);

function successCallback(response){
 console.log("I got the data I requested");
 $scope.contactlist = response.data;
}

function errorCallback(error){
    //error code
}

}]);
