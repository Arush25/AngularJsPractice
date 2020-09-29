var app = angular.module('myApp', [])
    .controller('myCtrl', function ($scope) {
        $scope.students=[];
        var empid=1;
        $scope.add = function () {
            if ($scope.newStudent.id == null) {

                $scope.newStudent.id = empid++;

                $scope.students.push($scope.newStudent);

            } else {

                for (i in $scope.students) {

                    if ($scope.students[i].id == $scope.newStudent.id) {

                        $scope.students[i] = $scope.newStudent;

                    }

                }

            }

            $scope.newStudent = {};
            console.log($scope.students);
            console.log($scope.newStudents);
        };
        $scope.delete = function (id) {

            for (i in $scope.students) {

                if ($scope.students[i].id == id) {

                    $scope.students.splice(i, 1);

                    $scope.newStudent = {};

                }

            }

        };

        $scope.edit = function (id) {

            for (i in $scope.students) {

                if ($scope.students[i].id == id) {

                    $scope.newStudent = angular.copy($scope.students[i]);

                }

            }

        };
    });

