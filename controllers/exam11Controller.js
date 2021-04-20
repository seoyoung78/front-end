angular.module("app")
    .controller("exam11Controller", function($scope) {
        $scope.content = "";

        //외부에서 값을 받아 바인딩
        $scope.setContent = (content) => {
            $scope.content = content;
        };
    });