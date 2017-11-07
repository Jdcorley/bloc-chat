(function () {
    function ModalCtrl($uibModalInstance){
/* enter function */
       this.ok= function(){ 
        $uibModalInstance.close(this.name);
       }
/* cancel function */
     this.cancel = function() {
       $uibModalInstance.dismiss('cancel');
       }
    };
    angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
})();

