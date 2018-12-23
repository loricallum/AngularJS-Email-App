
   function TestCtrl($scope) {
      $scope.title = 'This AngularJS app will work!';
   };

   var app = angular.module('app', [
   'ngRoute'
]);
   /*setup routes using the $routeProvider in the .config() callback*/
   app.config(function ($routeProvider) {
   	 $routeProvider
      .when('/inbox', {
         templateUrl: 'views/inbox.html',
         controller: 'InboxCtrl',
         controllerAs: 'inbox'
      })
      .when('/inbox/email/:id', {
         templateUrl: 'views/email.html',
         controller: 'EmailCtrl',
         controllerAs: 'email'
      })
      .otherwise({
         redirectTo: '/inbox'
      });
});

