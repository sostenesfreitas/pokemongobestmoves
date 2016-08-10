angular.module('todoApp', [])
 .controller('TodoListController', ['$scope','$http',function ($scope,$http){
    $scope.pokes = {};
    $http.get('http://localhost:3000/moves?name=Mewtwo').success(function(data){
        $scope.pokes = data;
    });
    $scope.buscar = function(name){
    $http.get('http://localhost:3000/moves?name='+name).success(function(data){
        $scope.pokes = data;
    });
    }
}])
