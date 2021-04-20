angular.module("app") 
    .controller("exam24Controller", function($scope, $window, $document, $interval, $location, $routeParams, $anchorScroll, $log) {
        $scope.openAlert = () => {
            $window.alert("알림 메시지...");
        };

        $scope.findDom = () => {
            //$("#content").html("Hello, AngularJS");
            $document.find("#content").html("Hello, AngularJS");
        };

        // window.setTimeout(() => {    //순수 자바스크립트로 작성 -> angularJS 가 관여x(상태데이터 사용할 수x)
        //     $scope.openAlert();
        // }, 3000);

        let timerId;
        $scope.startTime = () => {
            timerId = $interval(() => {
                var now = new Date();
                $document.find("#content").html(now.toLocaleDateString() + " " + now.toLocaleTimeString());
            }, 1000);
        };

        $scope.endTime = () => {
            if(timerId) {
                $interval.cancel(timerId);
            }
        };

        $scope.changeUrl1 = (pageNo) => {
            const path = `/exam24_builtin_service/boards?pageNo=${pageNo}#bottom`;  //#! 추가x
            $location.url(path);    //라우트에 경로 추가
        };

        $scope.changeUrl2 = (bno, pageNo) => {
            const path = `/exam24_builtin_service/boards/${bno}?pageNo=${pageNo}#bottom`;  //bottom으로 자동으로 이동
            $location.url(path);    //라우트에 경로 추가
        };

        $scope.$on("$locationChangeSuccess", () => {
            //현재 url의 경로 정보
            const currentUrl = $location.url(); //매개값을 주지 않으면 get의 역할
            console.log("$location.url():", $location.url());
            console.log("$location.path():", $location.path());
            console.log("$location.search():", $location.search());
            console.log("$location.hash():", $location.hash());

            console.log("$routeParams():", $routeParams);
            const bno = $routeParams.bno;
            const pageNo = $routeParams.pageNo;
            console.log("bno: ", bno);
            console.log("pageNo: ", pageNo);
        });        

        $scope.items = [];
        for(var i = 0; i < 50; i++) {
            $scope.items.push("Item " + i);
        };

        $scope.show = (id) => {
            $anchorScroll(id);  //버튼을 이용하여 수동으로 이동
        };

        $scope.handlePrintLog = () => {
            $log.error("yewon zzang Message");
            $log.warn("warn Message");
            $log.info("info Message");
            $log.debug("debug Message");
        }
    });