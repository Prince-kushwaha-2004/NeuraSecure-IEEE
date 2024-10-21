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

app.controller('MainController', function($scope) {
    $scope.isSidebarHidden = false;

    $scope.toggleSidebar = function() {
        $scope.isSidebarHidden = !$scope.isSidebarHidden 
        $http.get('incidents.json').then(function(response) {
            $scope.incidents = response.data;
            startNewsTicker();
        });
        function startNewsTicker() {
            const ticker = document.getElementById('news-ticker');
            let scrollHeight = 0;
            
            function scroll() {
                scrollHeight += 1;
                ticker.style.transform = `translateY(-${scrollHeight}px)`;

                if (scrollHeight > ticker.scrollHeight - 20) { 
                    scrollHeight = 0;
                }
                requestAnimationFrame(scroll);
            }
            requestAnimationFrame(scroll);
        }pe.isSidebarHidden;
    };
});

app.controller('IncidentsController', function($scope, $http) {
    $http.get('incidents.json').then(function(response) {
        $scope.incidents = response.data.incidents;
    });
});
app.controller('HomeController', function($scope,$http) {
    const threatsData = [10, 20, 30, 40, 50];
    const incidentsData = [5, 15, 25, 35, 45];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

    const ctx1 = document.getElementById('threatsChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Cybersecurity Threats',
                data: threatsData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx2 = document.getElementById('incidentsChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Cyber Incidents Reported',
                data: incidentsData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    $http.get('incidents.json').then(function(response) {
        $scope.incidents = response.data.incidents;
        console.log(response.data.incidents)
        startNewsTicker();
    });

        function startNewsTicker() {
            const ticker = document.getElementById('news-ticker');
            let scrollHeight = 0;
            function scroll() {
                scrollHeight += 1; 
                ticker.style.transform = `translateY(-${scrollHeight}px)`;
                if (scrollHeight > ticker.scrollHeight - 20) { 
                    scrollHeight = 0;
                }
                requestAnimationFrame(scroll);
            }
            requestAnimationFrame(scroll);
        }
});
