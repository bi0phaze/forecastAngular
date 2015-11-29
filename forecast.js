app.factory('forecast', ['$http', function($http) {
  return $http.get('http://api.wunderground.com/api/93d089f27c3c0cab/conditions/q/sc/beaufort.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
