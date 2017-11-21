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
<<<<<<< HEAD
=======
      function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);
        if (!currentUser || currentUser === undefined) {
            var modalInstance = $uibModal.open({
              templateUrl: '/templates/modalUsername.html',
              controller: 'ModalUsernameCtrl',
              controllerAs: 'modalUsernameCtrl'
            });
            modalInstance.result.then (function(username){
               this.username = username; 
               $cookies.put('blocChatCurrentUser',username) 
              }, function(){
                console.log("You have to add a user");
              }) 
      }
    }
>>>>>>> checkpoint-5
/* dependencies ui router, firebase, bootstrap; module blocChat; config */
  angular
    .module('blocChat', ['ui.router', 'firebase','ui.bootstrap','ngCookies'])
    .config(config)
    .run(['$cookies','$uibModal', BlocChatCookies]);
})();
