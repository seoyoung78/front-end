angular.module("app")
  .controller("exam26Controller", function($scope, exam26Service) {
    //처음 실행 시 무조건 첫 페이지
    $scope.$on("$routeChangeSuccess", () => {
      $scope.getList(1);
    }); 

    //include 시 외부 서버 경로 변경
    $scope.view = "list";
    $scope.getView = () => {
      switch($scope.view) {
        case "list" : return "views/exam26_http_boards/list.html";
        case "create" : return "views/exam26_http_boards/create.html";
        case "read" : return "views/exam26_http_boards/read.html";
        case "update" : return "views/exam26_http_boards/update.html";
      }
    };

    $scope.getList = (pageNo) => {
      exam26Service.list(pageNo)
        .then((response) => { //jQuery에서는 response 대신 data
          $scope.pager = response.data.pager;
          $scope.boards = response.data.boards;
          $scope.pageRange = [];
          for(var i = $scope.pager.startPageNo; i <= $scope.pager.endPageNo; i++) {
            $scope.pageRange.push(i);
          }
          $scope.view = "list";
        });
    };
    
    $scope.createBoardForm = () => {
      $scope.view = "create";
    };

    $scope.read = (bno) => {
      exam26Service.read(bno)
        .then((response) => {
          $scope.board = response.data;
          $scope.view = "read";
        });
    };

    $scope.battachUrl = (bno) => {
      return exam26Service.battachUrl(bno);
    }
  });