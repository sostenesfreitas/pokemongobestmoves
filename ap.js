angular.module('todoApp', [])
 .controller('TodoListController', ['$scope','$http',function ($scope,$http){
    $scope.pokes = {};
    $http.get('http://localhost:3000/moves').success(function(data){
        $scope.pokes = data;
    });
}])
