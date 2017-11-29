(function() {
    function Message($firebaseArray, $filter, $cookies) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
      //Message.getByRoomId              
      Message.getByRoomId = function(roomId){
          //filter messages by their room ID.
         return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        }

        Message.send = function(newMessage,currentActiveRoom) {
            // Send method logic
            var messageNew = {
                content: newMessage,
                sentAt: $filter("date")(new Date(),"shortTime"),
                username: $cookies.get("blocChatCurrentUser"),
                roomId: currentActiveRoom.$id
            };
            messages.$add(messageNew);
        }
        return Message;
        };
  
    angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray','$filter', '$cookies', Message]);
  })();