angular
  .module("myApp", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    // The order of state && the order of urlRouterProvider vs. stateProvider do not matter
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "./js/home/homeTmpl.html"
      })
      .state("products", {
        url: "/products/:id",
        templateUrl: "./js/products/productsTmpl.html",
        controller: "productsCtrl",
        resolve: {
          productData: function(productsSrvc, $stateParams) {
            return productsSrvc
              .getProducts($stateParams.id)
              .then(res => res.data);
          }
        }
      })
      .state("settings", {
        url: "/settings",
        templateUrl: "./js/settings/settingsTmpl.html"
      });
    $urlRouterProvider.otherwise("/");
  });
