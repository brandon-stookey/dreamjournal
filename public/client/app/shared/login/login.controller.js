angular.module('dreamjournal.login', [])

  .controller('loginController', ['$scope', '$rootScope', '$http', 'auth', 'store', '$location',
  function ($scope,$rootScope, $http, auth, store, $location) {
  /////////User will login using Auth0///////////////
    $scope.found = true;

    $scope.login = function () {
      auth.signin({}, function (profile, token) {
        // Success callback
        $scope.found = false;
        store.set('profile', profile);
        store.set('token', token);
        $location.path('/home');
      }, function () {
        // Error callback
      });
    },    
  ///////////User logs out using Auth0////////////////
    $scope.logout = function() {
      $scope.found = true;
      auth.signout();
      store.remove('profile');
      store.remove('token');
    };

  $scope.showButton = function(){
    if($rootScope.signedIn){
      $scope.found = false;
    }
    return $scope.found;
  }    

$scope.init= function(){

//======================Get All Blog Posts On Init======================
  $scope.postsData = [];
  
  // $http({
  //     method: 'GET',
  //     url: '/get/all/posts'
  //   })
  //  .then(function(result) {
  //     result.data.forEach(function(post) {
  //       $scope.postsData.unshift(post);
  //     }); 
  //     console.log('Post GET successful');
  //   }, function(err) {
  //     console.error('Post GET error:', err);
  //   });
  };

  $scope.init();      
}]);






