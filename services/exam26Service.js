angular.module("app")
  .factory("exam26Service", function($http) { //싱글톤으로 사용
    //변수 선언
    const BASE_URL = "http://localhost:8080/boards";

    //서비스 객체 리턴
    return {
      list: function(pageNo = 1) {  //pageNo 기본값 1
        const promise = $http.get(BASE_URL, {params:{pageNo:pageNo}});  //프로미스로 리턴 - 비동기 처리
        return promise;
      },

      read: function(bno) {
        const promise = $http.get(BASE_URL + "/" + bno);
        return promise;
      },

      battachUrl: function(bno) {
        return BASE_URL + "/battach/" + bno;
      }
    };
  });