angular.module("app")
    .controller("exam17Controller", function($scope) {
        $scope.todos = [
            {action: "동영상 녹화(Office)", complete: false},
            {action: "앵귤러JS 복습(Home)", complete: false},
            {action: "알마인드(Home)", complete: false},
            {action: "밥먹기(Office)", complete: false}
        ];
    });