var app = angular.module('AMEAPP', ['angularUtils.directives.dirPagination','angular-loading-bar', 'ngAnimate']).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);

var self = this;
app.filter('checkIsNull', function () {
	  return function (item) {
	     if(item != "" || item != null){
			return item;
		 }else{
			return "-";
		 }
};
});
