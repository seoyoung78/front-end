angular.module("app") 
    .controller("exam22Controller", function($scope) {
        $scope.products = [
            {pno:1, name: "사과", category:"과일", price:2000.123, expiry:10},
            {pno:2, name: "꽁치", category:"해산물", price:10000.56, expiry:5},
            {pno:3, name: "콜라", category:"음료", price:1500, expiry:20},
            {pno:4, name: "바나나", category:"과일", price:4000, expiry:10},
            {pno:5, name: "연어", category:"해산물", price:20000, expiry:3},
            {pno:6, name: "맥주", category:"음료", price:5000, expiry:20},
            {pno:7, name: "망고", category:"과일", price:20000, expiry:7},
            {pno:8, name: "오징어", category:"해산물", price:3000, expiry:2},
            {pno:9, name: "커피", category:"음료", price:2500, expiry:1},
            {pno:10, name: "오렌지", category:"과일", price:2000, expiry:2},
        ];

        $scope.limitRange = [3, 5, 7, 10];
        $scope.limitVal = "10";  //option에 들어갈 때는 문자로 들어감

        $scope.getExpiryDate = (days) => {
            var now = new Date();
            return now.setDate(now.getDate() + days);
        }

        $scope.categoryList = ["전체", "과일", "해산물", "음료"];
        $scope.categoryVal = "전체";
        //전체라는 카테고리가 없기 때문에 공백으로 지정되도록 --> 필터링 하지 않음
        $scope.getCategoryVal = () => {
            return $scope.categoryVal === "전체"?"" : $scope.categoryVal;
        };

        $scope.checkFiltering = (product) => {
            const result = (product.category === "과일") && (product.price > 2100);
            return result;
        };
    });