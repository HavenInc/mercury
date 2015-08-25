angular.module('app', [
  'lbServices',
  'ui.router'
])
.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('viewstocks', {
      url: '',
      templateUrl: 'views/stockDisplay.html',
      controller: 'StockController'
    });

  $urlRouterProvider.otherwise('viewstocks');
});