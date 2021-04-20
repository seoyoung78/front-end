angular.module("app")
    .controller("exam07Controller", function($scope) {  //scope: 컨트롤러 범위에서만 사용 가능한 상태 정보 & 메소드 저장
        $scope.todos = [
            {action: "동영상 녹화(Office)", complete: false},
            {action: "앵귤러JS 복습(Home)", complete: false},
            {action: "알마인드(Home)", complete: false}
        ];

        $scope.addNewItem1 = (newTodo) => {
            if(newTodo && newTodo.action && newTodo.location) {
                $scope.todos.push({ //배열 추가는 push
                    action: newTodo.action + "(" + newTodo.location + ")",
                    complete: false
                });
                newTodo.action = "";
                newTodo.location = "";  //바인딩이 되어 있어 입력값이 남아 있는 것을 지워줌
            } else {
                console.log("올바르게 입력되지 않았음");
            }
        };

        $scope.addNewItem2 = () => {
            if($scope.newTodo && $scope.newTodo.action && $scope.newTodo.location) {
                $scope.todos.push({ //배열 추가는 push
                    action: $scope.newTodo.action + "(" + $scope.newTodo.location + ")",
                    complete: false
                });
                $scope.newTodo.action = "";
                $scope.newTodo.location = "";  //바인딩이 되어 있어 입력값이 남아 있는 것을 지워줌
            } else {
                console.log("올바르게 입력되지 않았음");
            }
        };
    });