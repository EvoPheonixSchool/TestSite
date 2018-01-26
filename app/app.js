var app = angular.module("myApp", ['ngRoute']);



app.controller('mainController', ['$scope', function ($scope) {
    $scope.menu1 = 'Projects';
    $scope.menu2 = 'About';

    $scope.projects = [
        {
            name: "Melee Superhero",
            pic: "photos/pika.jpg",
            start: new Date("2017","12","22"),
            release: "TBD",
            active: "Yes",
            desc: "Be the very best that no one ever was"
        },
        {
            name: "Secret Game",
            pic: "photos/topSecret.png",
            start: new Date("2018","01","08"),
            release: "TBD",
            active: "Yes",
            desc: "Small game development with a team"
        },
        {
            name: "Secret App",
            pic: "photos/kill me now.PNG",
            start: new Date("2018","06","03"),
            release: "TBD",
            active: "No",
            desc: "Secret app for android"
        }
    ]
}]);



app.config(function ($routeProvider) {
    $routeProvider
        .when("/projects",{
            controller: "mainController",
            templateUrl: "Projects/Projects.html"
        })
        .when("/",{
            templateUrl: 'Main.html'
        })
        .when("/about",{
            templateUrl: "About/About.html"
        });
});


