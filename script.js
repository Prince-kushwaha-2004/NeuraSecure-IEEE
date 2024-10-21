var app = angular.module('neurasecureApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html'
        })
        .state('incidents', {
            url: '/incidents',
            templateUrl: 'templates/incidents.html',
            controller: 'IncidentsController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        });
});


