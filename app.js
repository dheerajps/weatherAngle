var app = angular.module('myapp', [])
.controller('MyModuleWeather', function($scope, $http, $log) {
  // Set default values for our form fields.
  $scope.units = 'metric';
  $scope.city= 'Bangalore';
  // Define a function to process form submission.
  $scope.changeCity = function() {
    // Fetch the data from the public API through JSONP.
    // See http://openweathermap.org/API#weather.
	
	//Current Weather
	var url='http://api.openweathermap.org/data/2.5/weather?appid=c386b0ce6a23a53b3ee5d7ecb966c0e1';
	$http.jsonp(url, { params : {
		q: $scope.city,
        units : 'metric',
        callback: 'JSON_CALLBACK'
      }}).
      success(function(data, status, headers, config) {
      console.log(data);
		  $scope.currentTemp=data.main.temp;
		  $scope.currentMax=data.main.temp_max;
		  $scope.currentMin=data.main.temp_min;
		  $scope.currentCity=data.name;
      $scope.currentCountry=data.sys.country;
		  $scope.currentDate=data.dt;
		  $scope.currentDescription=data.weather[0].description;
      $scope.currentDescriptionImage = data.weather[0].icon;
      $scope.currentVisibility = data.visibility
		  $scope.sunrise=data.sys.sunrise;
		  $scope.sunset=data.sys.sunset;
		  $scope.windspeed=data.wind.speed;
		  $scope.direction=data.wind.deg;
		  $scope.pressure=data.main.pressure;
		  $scope.humidity=data.main.humidity;
      }).
      error(function(data, status, headers, config) {
        // Log an error in the browser's console.
        $log.error('Could not retrieve data from ' + url);
      });
	  
	//6 day forecast  
	url='http://api.openweathermap.org/data/2.5/forecast/daily?appid=c386b0ce6a23a53b3ee5d7ecb966c0e1&cnt=7&units=metric';
    $http.jsonp(url, { params : {
		q: $scope.city,
        units : 'metric',
        callback: 'JSON_CALLBACK'
      }}).
      success(function(data, status, headers, config) {

		  $scope.list=data.list;
      console.log(data.list);
      }).
      error(function(data, status, headers, config) {
        // Log an error in the browser's console.
        $log.error('Could not retrieve data from ' + url);
      });
  };
 
  // Trigger form submission for first load.
		$scope.changeCity();
});