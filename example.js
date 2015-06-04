angular.module('plunker', ['ui.bootstrap']);
function AccordionDemoCtrl($scope) {
  $scope.oneAtATime = true;
  $scope.obj = {
    isopen: false,
    isAllOpen: false
  };

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

 


}
