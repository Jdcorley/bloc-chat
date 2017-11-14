(function (){
  function HomeCtrl(Room, $uibModal, $scope, Message){
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
      //set active room
      $scope.setActiveRoom = function(room){
        $scope.activeRoom = room;
        $scope.messages = Message.getByRoomId(room.$id); //Message service to filter messages by room $id
      }
  
      this.rooms = Room.all;
      
    
  }
  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room','$uibModal','$scope','Message', HomeCtrl]);
})();
