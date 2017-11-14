(function () {
  function config($locationProvider, $stateProvider) {
          $locationProvider
              .html5Mode({
                  enabled: true,
                  requireBase: false
               });
/*ui route for home ctrl and home template*/
          $stateProvider
              .state('home', {
                  url: '/',
                  controller: 'HomeCtrl as homeCtrl',
                  templateUrl: '/templates/home.html'
            });
   
      }
/* dependencies ui router, firebase, bootstrap; module blocChat; config */
  angular
    .module('blocChat', ['ui.router', 'firebase','ui.bootstrap'])
    .config(config);
})();
