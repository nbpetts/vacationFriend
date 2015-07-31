var MyApp = angular.module("myApp",[
  "ngRoute",
  "artistControllers"
]);

MyApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
  when("/list", {
    templateUrl: "partials/list.html",
    controller: "ListController"
  }).
  otherwise ({    
    redirectTo: "/list"
  });
}]);