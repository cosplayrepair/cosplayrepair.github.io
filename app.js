// create the module and name it cosplayRepairStationApp
var cosplayRepairStationApp = angular.module('cosplayRepairStationApp', ['ngRoute']);

// configure our routes
cosplayRepairStationApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    })

    // route for the faq page
    .when('/faq', {
      templateUrl : 'pages/faq.html',
      controller  : 'faqController'
    })

    // route for the blog page
    .when('/blog', {
      templateUrl : 'pages/blog.html',
      controller  : 'blogController'
    })

    // route for the blog page
    .when('/blog-news', {
      templateUrl : 'pages/blog-news.html',
      controller  : 'blogNewsController'
    })

    // route for the blog page
    .when('/blog-tutorials', {
      templateUrl : 'pages/blog-tutorials.html',
      controller  : 'blogTutorialsController'
    })
});

// create the controller and inject Angular's $scope
cosplayRepairStationApp.controller('mainController', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

cosplayRepairStationApp.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

cosplayRepairStationApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});
