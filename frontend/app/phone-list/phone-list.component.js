'use strict';

angular.module('phoneList', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/phone-list', {
            templateUrl: 'phone-list/phone-list.template.html'
        });
    }])

    .component('phoneList', {

        template:
            '<ul>' +
            '<li ng-repeat="phone in $ctrl.phones">' +
            '<a>{{phone.name}}</a> - ' +
            '<span>{{phone.snippet}}</span>' +
            '</li>' +
            '</ul>',
        controller: function PhoneListController() {
            this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ];
        }

    });