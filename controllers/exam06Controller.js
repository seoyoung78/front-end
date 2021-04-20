angular.module("app")
  .controller("exam06Controller", function($scope) {
    $scope.cities = ["서울", "뉴욕", "런던"]; //목록
    $scope.city = "뉴욕"; //현재 선택된 값
    $scope.getCountry = () => {
      switch($scope.city) {
        case "서울":
          return "한국";
        case "뉴욕":
          return "미국";
        case "런던":
          return "영국";
      }
    };
  });