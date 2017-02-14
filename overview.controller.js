(function(){

  /***** Controller for Overview page *****/
  
   "use strict";
   angular.module('researchApp')
   .controller('OverviewController', OverviewController);
   OverviewController.$inject = ['$scope','$rootScope','$http','$timeout','$location'];

   function OverviewController(ngScope,ngRootScope,http,timeout,location){


            var vm=this;
        
        
            vm.initOverviewController=initOverviewController;
            //Wait for executing until dom
            timeout(initOverviewController,50);
            function initOverviewController(){
                console.log("hello");

                $(".dropdown-button").dropdown();
                $(".button-collapse").sideNav();
                $('.parallax').parallax();
                $("#navBack").click(function(){
                   history.go(-1);
                });


            }
            vm.directToStudy = function(link) {
                location.path('/'+link);
            }
            vm.initiateLogOut = function(){
                vm.message = "You have Logged out successfully!"
                LoginService.clearCredentials();
                location.path('/logout');
                Materialize.toast(vm.message, 7000, 'rounded');
            }

            vm.tvShowArrays = ['Game of Thrones', 'Firefly', 'Sherlock']
    }

})();