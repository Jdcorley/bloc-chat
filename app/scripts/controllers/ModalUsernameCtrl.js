(function () {
    function ModalUsernameCtrl($uibModalInstance){
/* enter function */
       this.ok= function(){ 
        $uibModalInstance.close(this.blocChatCurrentUser);
        }
    };
    angular
    .module('blocChat')
    .controller('ModalUsernameCtrl', ['$uibModalInstance', ModalUsernameCtrl]);
})();