var app = angular.module('olooqApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',
        {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
    });
    $routeProvider.when('/about',
        {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
    });
    $routeProvider.when('/why',
        {
            templateUrl: 'views/why.html',
            controller: 'WhyController'
    });
    $routeProvider.when('/contact',
        {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
    });
}]);


app.controller('HomeController', ['$location', function($location){
    var ctr = this;
    
    ctr.gotoPage = function(page){
        $location.path(page);
    }
}]);

app.controller('AboutController', ['$location', function($location){
    var ctr = this;
    
    ctr.gotoPage = function(page){
        $location.path(page);
    }
}]);

app.controller('WhyController', ['$location', function($location){
    var ctr = this;
    
    ctr.gotoPage = function(page){
        $location.path(page);
    }
}]);

app.controller('ContactController', ['$location', function($location){
    var ctr = this;
    
    ctr.gotoPage = function(page){
        $location.path(page);
    }
}]);