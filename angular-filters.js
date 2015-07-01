app.filter('addDays', function() {
  return function(input, daysToAdd) {

  	var msInDay = 86400000;
  	var msToAdd = 0;
  	var msInCurrent = 0;
  	var returnDate = undefined;

  	if(input instanceof Date){

  		msInCurrent = input.getTime();
  		
  		
  		if(isNaN(daysToAdd)){
  			throw  "You mast pass a number to add some day/days";		
  		}

  		msToAdd = msInDay * daysToAdd;
  		returnDate = new Date(msInCurrent+msToAdd);
  		return returnDate;

  	}
  	else{

  		throw "You mast pass an Date object as first argument";
  	}
    
  };
});

app.filter('subDays', function() {
  return function(input, daysToSub) {

  	var msInDay = 86400000;
  	var msToSub = 0;
  	var msInCurrent = 0;
  	var returnDate = undefined;

  	if(input instanceof Date){

  		msInCurrent = input.getTime();
  		
  		
  		if(isNaN(daysToSub)){
  			throw  "You mast pass a number to sub some day/days";		
  		}

  		msToSub = msInDay * daysToSub;
  		returnDate = new Date(msInCurrent-msToSub);
  		return returnDate;

  	}
  	else{

  		throw "You mast pass an Date object as first argument";
  	}
    
  };
});

app.filter('addHours', function() {
  return function(input, hoursToAdd) {

  	var msInHour = 3600000;
  	var msToAdd = 0;
  	var msInCurrent = 0;
  	var returnDate = undefined;

  	if(input instanceof Date){

  		msInCurrent = input.getTime();
  		
  		
  		if(isNaN(hoursToAdd)){
  			throw  "You mast pass a number to add some hour/hours";		
  		}

  		msToAdd = msInHour * hoursToAdd;
  		returnDate = new Date(msInCurrent+msToAdd);
  		return returnDate;

  	}
  	else{

  		throw "You mast pass an Date object as first argument";
  	}
    
  };
});

app.filter('subHours', function() {
  return function(input, hoursToSub) {

  	var msInHour = 3600000;
  	var msToSub = 0;
  	var msInCurrent = 0;
  	var returnDate = undefined;

  	if(input instanceof Date){

  		msInCurrent = input.getTime();
  		
  		
  		if(isNaN(hoursToSub)){
  			throw  "You mast pass a number to sub some hour/hours";		
  		}

  		msToSub = msInHour * hoursToSub;
  		returnDate = new Date(msInCurrent-msToSub);
  		return returnDate;

  	}
  	else{

  		throw "You mast pass an Date object as first argument";
  	}
    
  };
});

app.filter('addMinute', function() {
  return function(input, minutesToAdd) {

  	var msInMinute = 60000;
  	var msToAdd = 0;
  	var msInCurrent = 0;
  	var returnDate = undefined;

  	if(input instanceof Date){

  		msInCurrent = input.getTime();
  		
  		
  		if(isNaN(minutesToAdd)){
  			throw  "You mast pass a number to add some minute/minutes";		
  		}

  		msToAdd = msInMinute * minutesToAdd;
  		returnDate = new Date(msInCurrent+msToAdd);
  		return returnDate;

  	}
  	else{

  		throw "You mast pass an Date object as first argument";
  	}
    
  };
});

app.filter('subMinutes', function() {
  return function(input, minutesToSub) {

  	var msInMinute = 60000;
  	var msToSub = 0;
  	var msInCurrent = 0;
  	var returnDate = undefined;

  	if(input instanceof Date){

  		msInCurrent = input.getTime();
  		
  		
  		if(isNaN(minutesToSub)){
  			throw  "You mast pass a number to sub some hour/hours";		
  		}

  		msToSub = msInMinute * minutesToSub;
  		returnDate = new Date(msInCurrent-msToSub);
  		return returnDate;

  	}
  	else{

  		throw "You mast pass an Date object as first argument";
  	}
    
  };
});

app.filter('addSeconds', function() {
  return function(input, secondsToAdd) {

  	var msInSecond = 1000;
  	var msToAdd = 0;
  	var msInCurrent = 0;
  	var returnDate = undefined;

  	if(input instanceof Date){

  		msInCurrent = input.getTime();
  		
  		
  		if(isNaN(secondsToAdd)){
  			throw  "You mast pass a number to add some second/seconds";		
  		}

  		msToAdd = msInSeconds * secondsToAdd;
  		returnDate = new Date(msInCurrent+msToAdd);
  		return returnDate;

  	}
  	else{

  		throw "You mast pass an Date object as first argument";
  	}
    
  };
});

app.filter('subSeconds', function() {
  return function(input, secondsToSub) {

  	var msInSecond = 1000;
  	var msToSub = 0;
  	var msInCurrent = 0;
  	var returnDate = undefined;

  	if(input instanceof Date){

  		msInCurrent = input.getTime();
  		
  		
  		if(isNaN(secondsToSub)){
  			throw  "You mast pass a number to sub some second/seconds";		
  		}

  		msToSub = msInSecond * secondsToSub;
  		returnDate = new Date(msInCurrent-msToSub);
  		return returnDate;

  	}
  	else{

  		throw "You mast pass an Date object as first argument";
  	}
    
  };
});
