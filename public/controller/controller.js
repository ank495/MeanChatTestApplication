var app = angular.module('mainApp',[]);

app.controller('sdAppCtrl',['$scope','$http',function($scope,$http){
  console.log("In the controller");

  $scope.sendUserInfo = function(){
	 var incoming_request_body = {
	  user:{ name: $scope.firstName, email:'',phone:''},
	  website:$scope.siteName,
	  type:'auth'
     }
    $http.post('/authentication',incoming_request_body).then(function(response){
      console.log(response.data);
    })
  };

  $scope.editContact = function(id){
    console.log(id);
    $http.get('/contactlist/'+ id).then(function(response){
      console.log(response.data);
      $scope.contact = response.data;
    });
  };

  $scope.sendMail = function(){
    $http.get('/sendMail').then(function(response){
      console.log("Mail sent");
    })
  }


  $scope.updateContact = function(){
    console.log($scope.contact._id);
    console.log($scope.contact);
    $http.put('/contactlist/'+ $scope.contact._id, $scope.contact).then(function(response){
      console.log(response.data);
      refresh();
    })
  }


  $scope.deleteContact = function(id){
    $http.delete('/contactlist/'+ id).then(function(response){
      console.log(response.data);
    });
  };

}]);