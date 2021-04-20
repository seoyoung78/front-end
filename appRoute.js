angular.module("app") // 생성된 모듈 구성
    .config(function($locationProvider, $routeProvider) {    //화살표 함수 사용x
        //HTML5 모드 활성화 (라우트 전에 활성화 해야 함)
        // $locationProvider.html5Mode({  
        //     enabled: true,
        //     requireBase: true   //root를 어디로 볼 것인가 - <base href> 반드시 작성
        // });

        //라우트 정의 - 같은 DOM 내부에서 이동할 때 사용
        $routeProvider
            .when("/", {templateUrl: "views/exam01_home.html"}) 
            .when("/exam02_module_create_find", {templateUrl: "views/exam02_module_create_find.html"}) 
            .when("/exam03_module_dependency", {templateUrl: "views/exam03_module_dependency.html"})
            .when("/exam04_module_config_run_callback", {templateUrl: "views/exam04_module_config_run_callback.html"})
            .when("/exam05_controller_declaration", {templateUrl: "views/exam05_controller_declaration.html", controller: "exam05Controller"})  //라우트에서 컨트롤러 지정
            .when("/exam06_scope_property_method", {templateUrl: "views/exam06_scope_property_method.html", controller: "exam06Controller"})
            .when("/exam07_scope_inplicit_property", {templateUrl: "views/exam07_scope_inplicit_property.html", controller: "exam07Controller"})
            .when("/exam08_rootScope_nestedcontroller", {templateUrl: "views/exam08_rootScope_nestedcontroller.html", controller: "exam08Controller"})
            .when("/exam09_scope_broadcast", {templateUrl: "views/exam09_scope_broadcast.html", controller: "exam09Controller"})
            .when("/exam10_scope_watch", {templateUrl: "views/exam10_scope_watch.html", controller: "exam10Controller"})
            .when("/exam11_outside_to_scope", {templateUrl: "views/exam11_outside_to_scope.html", controller: "exam11Controller"})
            .when("/exam12_one_way_binding", {templateUrl: "views/exam12_one_way_binding.html", controller: "exam12Controller"})
            .when("/exam13_two_way_binding", {templateUrl: "views/exam13_two_way_binding.html", controller: "exam13Controller"})
            .when("/exam14_ng-repeat", {templateUrl: "views/exam14_ng-repeat.html", controller: "exam14Controller"})
            .when("/exam15_ng-include", {templateUrl: "views/exam15_ng-include/index.html", controller: "exam15Controller"})
            .when("/exam16_ng-switch", {templateUrl: "views/exam16_ng-switch.html", controller: "exam16Controller"})
            .when("/exam17_ng-show_ng-hide_ng-if", {templateUrl: "views/exam17_ng-show_ng-hide_ng-if.html", controller: "exam17Controller"})
            .when("/exam18_ng-class_ng-style", {templateUrl: "views/exam18_ng-class_ng-style.html", controller: "exam18Controller"})
            .when("/exam19_event_directive", {templateUrl: "views/exam19_event_directive.html", controller: "exam19Controller"})
            .when("/exam20_boolean_href_src", {templateUrl: "views/exam20_boolean_href_src.html", controller: "exam20Controller"})
            .when("/exam21_form_validation", {templateUrl: "views/exam21_form_validation.html", controller: "exam21Controller"})
            .when("/exam22_filter", {templateUrl: "views/exam22_filter.html", controller: "exam22Controller"})
            .when("/exam23_service_declaration", {templateUrl: "views/exam23_service_declaration.html", controller: "exam23Controller"})
            
            .when("/exam24_builtin_service", {templateUrl: "views/exam24_builtin_service/index.html", controller: "exam24Controller"})  //컨트롤러는 생성할 때마다 새로 생김, 공유x -> 상태 데이터를 넘겨서 사용 할 수 x -> rootscope에 저장 or mainController에 저장해서 사용
            .when("/exam24_builtin_service/boards", {templateUrl: "views/exam24_builtin_service/boards.html", controller: "exam24Controller"})
            .when("/exam24_builtin_service/boards/:bno", {templateUrl: "views/exam24_builtin_service/boards.html", controller: "exam24Controller"})     //bno: 경로 변수(path 변수)

            .when("/exam25_http_products", {templateUrl: "views/exam24_builtin_service/boards.html", controller: "exam24Controller"})

            .otherwise({redirectTo: "/"});  //요청되지 않은 경로로 호출 될 경우 경로 지정
    }); 