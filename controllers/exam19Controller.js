angular.module("app")
    .controller("exam19Controller", function($scope) {
        $scope.imageName = "photo1.jpg";

        $scope.handleBtnClick = (event) => {
            if($scope.imageName === "photo1.jpg") {
                $scope.imageName = "photo2.jpg";
            } else {
                $scope.imageName = "photo1.jpg";
            }
        };

        $scope.todos = [
            {action: "동영상 녹화(Office)", complete: false},
            {action: "앵귤러JS 복습(Home)", complete: false},
            {action: "알마인드(Home)", complete: false},
            {action: "밥먹기(Office)", complete: false}
        ];

        $scope.handleMouseEvent = (event) => {
            console.log("Event Type:", event.type);
            console.log("Event Target:", event.target);
            if(event.type === "mouseenter") {
                $(event.target).parent("tr").css("background-color", "#e9ecef");    //jquery를 작성 - event.target의 부모인 tr에 css 적용
            } else {
                $(event.target).parent("tr").css("background-color", "#ffffff");
            }
        };
    });