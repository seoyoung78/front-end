angular.module("app") 
    .controller("exam23Controller", function($scope, 
                                             counterSeviceByFactory,
                                             counterSeviceByService,
                                             counterSeviceByProvider) {
        $scope.addCount = () => {
            counterSeviceByFactory.addCount();
            counterSeviceByService.addCount();
            counterSeviceByProvider.addCount();
        };

        $scope.getCount1 = () => {
            return counterSeviceByFactory.getCount();
        };

        $scope.getCount2 = () => {
            return counterSeviceByService.getCount();
        }   
            
        $scope.getCount3 = () => {
            return counterSeviceByProvider.getCount();
        }   
    });