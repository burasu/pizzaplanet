(function ()
{
    'use strict';

    angular.module('PizzaPlanetApp.controllers', []);

    function MainController ($scope)
    {
        $scope.today = new Date();

        $scope.appetizers = [
            {
                name: 'Caprese',
                description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
                price: 4.95
            },
            {
                name: 'Mozzarella Sticks',
                description: 'Served with marinara sauce.',
                price: 3.95
            },
            {
                name: 'Bruschetta',
                description: 'Grilled bread garlic, tomatoes, olive oil',
                price: 4.95
            }
        ];

        $scope.mains = [
            {
                name: 'Caprese',
                description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
                price: 4.95
            },
            {
                name: 'Mozzarella Sticks',
                description: 'Served with marinara sauce.',
                price: 3.95
            },
            {
                name: 'Bruschetta',
                description: 'Grilled bread garlic, tomatoes, olive oil',
                price: 4.95
            }
        ];

        $scope.extras = [
            {
                name: 'Caprese',
                description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
                price: 4.95
            },
            {
                name: 'Mozzarella Sticks',
                description: 'Served with marinara sauce.',
                price: 3.95
            },
            {
                name: 'Bruschetta',
                description: 'Grilled bread garlic, tomatoes, olive oil',
                price: 4.95
            }
        ];
    }

    angular
        .module('PizzaPlanetApp.controllers')
        .controller('MainController', MainController);

})();
