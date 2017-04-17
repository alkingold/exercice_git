var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.prenom = "Jean";
    $scope.nom = "Valjean";
    $scope.nomComplet = function() {
        return $scope.prenom + " " + $scope.nom;
    };
});