angular.module("listaPessoas", []);
angular.module("listaPessoas").controller("listaPessoasCtrl", function ($scope, $http){
	$scope.app = "Lista de Pessoas";
	$scope.pessoas = [];
	
	var carregarPessoas = function () {
		$http.get("http://localhost:8090/people-rest/rest/people")
        .then(function(result, status) {
            $scope.pessoas = result.data;
        });
	};
    carregarPessoas();
});