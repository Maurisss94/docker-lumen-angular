'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'view'
        });
    }])

    .controller('View1Ctrl', ['$http', settingsController]);

function settingsController($http) {

    let self = this;
    self.name = "Mauro Balestra";
    console.log($http);

    $http.get('phones/phones.json').then(function (response) {
        self.phones = response.data;
    });
    self.orderProp = 'age';
}