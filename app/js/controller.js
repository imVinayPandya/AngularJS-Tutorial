var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller("PhoneListCtrl", ['$scope', '$http', 'Phone', function ($scope, $http, Phone) {
    /*$http.get('phones/phones.json').success(function (data) {
     $scope.phones = data;

     });*/
    $scope.phones = Phone.query();
    $scope.orderProp = "age";
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', 'Phone', function ($scope, $routeParams, $http, Phone) {
    $scope.phone = Phone.get(
        {phoneId: $routeParams.phoneId}, function (phone) {
            $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}]);