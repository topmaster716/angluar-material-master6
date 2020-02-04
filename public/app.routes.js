var router = angular.module('materialApp.routes', ['ui.router']);
router.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    // UI Router States
    // Inserting Page title as State Param
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/modules/home/views/home.html',
            controller: 'homeCtrl',
            controllerAs: 'Home',
            params: {
                title: "Home"
            }
        });

    $locationProvider.html5Mode(true);

});