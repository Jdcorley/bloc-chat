(function (){
  function HomeCtrl(Room, $uibModal){
    /**
     * open model instance 
     */
    this.open = function(){
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modalCtrl', 
        bindToController: true
      }); 
      modalInstance.result.then (function(name){
        Room.add(name);
      }, function(){
        console.log("You canceled the modal");
      }) 
    }
      this.rooms = Room.all;
  }
  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room','$uibModal', HomeCtrl]);
})();
