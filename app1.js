(function(){
   /***** Instantiate the module *****/
   "use strict";
   /***** Inject the modules which are dependencies *****/
   
   angular.module('researchApp',['ngRoute','angularCSS'])
   		  .config(config);
          

    //Any new route(Page) added needs to be configured here by providiing it's details
   config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider

            .when('/overview', {
                title: 'TrackMe',
                controller: 'OverviewController',
                templateUrl: 'overview.html',
                css: 'style.css',
                controllerAs: 'vm'
            })
             .otherwise({ redirectTo: '/overview' });
    }
}) ();