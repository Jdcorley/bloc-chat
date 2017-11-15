(function() {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");
    
      //Message.getByRoomId              
      Message.getByRoomId = function(roomId){
          //filter messages by their room ID.
         return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };
       

        return Message;
        };
  
    angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', Message]);
  })();