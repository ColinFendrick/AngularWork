Module contains different components of an AngularJS app

`ng-app` is a directive. Says that `myApp` module will live in the `<body>` element.

`MainController` manages the app data. Title stores a string and attaches to `$scope`
Then we used the div of main to give the directive to the controller scope. Then we can access that scope inside of the `{{title}}

1. Create a module
2. Create a controller in view to define the controller scope
3. Add data to the scope of the controller so it can be used in view

- Module contains different components of app
- Controller manages data
- Expression displats values on the page
- Filter formats the value of an expression

`ng-repeat` is a directive to loop through an array and display each element


