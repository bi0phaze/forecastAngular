
(function () {
  angular
    .module('ForecastApp')
    .controller('MainController', ['$scope', 'forecast', function($scope,forecast) {

      forecast.get5DayForecast().success(function(data) {
        $scope.fiveDay = data;
      });
  }]);
   // body...
})();
