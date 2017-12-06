angular.module("myApp").service("productsSrvc", function($http) {
  // this.getShoeData = function() {
  //   return $http({
  //     method: "GET",
  //     url: "https://practiceapi.devmountain.com/products?category=shoes"
  //   });
  // };

  // Second way to handle the above
  this.getProducts = function(category) {
    return (
      $http
        .get(`http://practiceapi.devmountain.com/products?category=${category}`)
        // .then(response => console.log(response.data))
        .catch(console.log)
    );
  };

  // this.getSockData = function() {
  //   return $http({
  //     method: "GET",
  //     url: "https://practiceapi.devmountain.com/products?category=socks"
  //   });
  // };
});
