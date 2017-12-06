angular
  .module("myApp")
  .controller("productsCtrl", function(
    $scope,
    $stateParams,
    productsSrvc,
    productData
  ) {
    // if ($stateParams.id === "shoes") {
    //   productsSrvc.getShoeData().then(function(response) {
    //     $scope.productData = response.data;
    //   });
    // optional way to interact with the service api provider
    //
    // productsSrvc.getProducts($stateParams).then(response => {
    //   console.log(response.data);
    //   $scope.productData = response.data;
    // });
    //

    // productsSrvc.getProducts().success(response => {
    //   $scope.productData = response;
    // });

    // ProductService.getFoo().success(function(foo) {
    //   $scope.foo = foo;
    // });
    $scope.productData = productData;
    console.log(productData);
    // } else if ($stateParams.id === "socks") {
    //   productsSrvc.getSockData().then(function(response) {
    //     $scope.productData = response.data;
    //   });
    // }
  });
