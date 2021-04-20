angular.module("app", ["ngRoute", "exam03Module", "exam04Module"]) // 모듈 생성 - 이름 : app, 외부 모듈 사용 - 앵귤러 root 모듈(가장 처음 실행)
    .config(function(counterSeviceByProviderProvider, $logProvider) {    // 모듈 마다 생성 가능
        console.log("app - config callback");
        counterSeviceByProviderProvider.setCount(100);
        $logProvider.debugEnabled(false);
    })
    .run(function($rootScope) {   // 모듈 마다 생성 가능 - 전역 데이터
        console.log("app - run callback");
        //전역 데이터
        $rootScope.rootuid = "user100";
        //전역 함수
        $rootScope.rootgetGreet = () => {
            return "Hello! AngularJS";
        };
    })
    //중첩된 컨트로러 범위에서 사용할 수 있는 상태 데이터 및 함수
    .controller("mainController", function($rootScope, $scope) {
        $scope.mainUid = "user200";
        
        $scope.mainGetGreet = () => {
            return "Hello! MainController";
        }

        $scope.logout = () => {
            $rootScope.uid = null;  //바인딩 되어 있을 경우 더 나은 방법
            //delete $rootScope.uid;  //uid를 날려버림
        }

        $scope.$on("loginSuccess", (event, message) => {
            console.log("mainController가 loginSuccess 방송 수신함");
            console.log(message);
            $rootScope.uid = message.uid;
        });

        $scope.$on("logout", (event) => {
            console.log("mainController가 logout 방송 수신함");
            $rootScope.uid = "";
        });
    });