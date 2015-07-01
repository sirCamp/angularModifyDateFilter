# angularModifyDateFilter
A simple filter for angular that allows you to add/subtract days, hours, minutes or second from a Date


### INSTALL
+ Include this file in your project or copy this code and paste it in your Angular's filters file.
+ Inside your template or in your view.

### USAGE

#### ADD DAYS

To add days to the date object you must to put a number of days that you want to add as argument of filter.
Example:
```javascript
$scope.your_date_object = new Date() // the variable inside controller

{{ your_date_object | addDays: 5 }} 
```
In this case the result date is the today date + 5 days.

#### SUB DAYS

To subtract days to the date object you must to put a number of days that you want to subtract as argument of filter.
Example:
```javascript
$scope.your_date_object = new Date() // the variable inside controller

{{ your_date_object | subDays: 5 }} 
```
In this case the result date is the today date - 5 days.

#### ADD HOURS

To add hours to the date object you must to put a number of hours that you want to add as argument of filter.

Example:
```javascript
$scope.your_date_object = new Date() // the variable inside controller

{{ your_date_object | addHours: 2 }} 
```
In this case the result date is the today date + 2 hours.

#### SUB HOURS

To subtract hours to the date object you must to put a number of hours that you want to subtract as argument of filter.

Example:
```javascript
$scope.your_date_object = new Date() // the variable inside controller

{{ your_date_object | subHours: 2 }} 
```
In this case the result date is the today date - 2 hours.


#### ADD MINUTES

To add minutes to the date object you must to put a number of minutes that you want to add as argument of filter.

Example:
```javascript
$scope.your_date_object = new Date() // the variable inside controller

{{ your_date_object | addMinutes: 10 }} 
```
In this case the result date is the today date + 10 minutes.

#### SUB MINUTES

To subtract minutes to the date object you must to put a number of minutes that you want to subtract as argument of filter.

Example:
```javascript
$scope.your_date_object = new Date() // the variable inside controller

{{ your_date_object | subMinutes: 10 }} 
```
In this case the result date is the today date - 10 days.

#### ADD SECONDS

To add seconds to the date object you must to put a number of seconds that you want to add as argument of filter.

Example:
```javascript
$scope.your_date_object = new Date() // the variable inside controller

{{ your_date_object | addSeconds: 30 }} 
```
In this case the result date is the today date + 30 seconds.

#### SUB SECONDS

To subtract seconds to the date object you must to put a number of seconds that you want to subtract as argument of filter.

Example:
```javascript
$scope.your_date_object = new Date() // the variable inside controller

{{ your_date_object | subDays: 30 }} 
```
In this case the result date is the today date - 30 seconds.
