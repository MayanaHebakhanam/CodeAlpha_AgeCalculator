function calculateAge(){

    // Get current system date
    var currentDate=new Date();

    // Split the date into year,month and days
    var currentYear=currentDate.getFullYear();
    var currentMonth=currentDate.getMonth();
    var currentDay=currentDate.getDate();

    // Get the user Entered date of birth
    var enteredDate=document.getElementById("dob").value;
    // convert user entered DOB into Date type
    var dateOfBirth=new Date(enteredDate);

    // Split the user entered DOB into year,month and day
    var dobYear=dateOfBirth.getFullYear();
    var dobDate=dateOfBirth.getDate();
    var dobMonth=dateOfBirth.getMonth();

    var newYear,newMonth,newDay;

    // Get age in years
    newYear= currentYear - dobYear;

    // Get age in months
    if(currentMonth>=dobMonth){
        newMonth=currentMonth - dobMonth;
    }
    else{
        newYear--;
        newMonth= 12 + currentMonth- dobMonth;
    }

    // Get age in days
    if(currentDay>=dobDate){
       newDay=currentDay - dobDate;
    }
    else{
        newMonth--;
        newDay= 31 + currentDay - dobDate;
        if(newMonth<0){
            newMonth=11;
            newYear--;
        }
        }
     var age={
        year:newYear,
        month:newMonth,
        day:newDay
     }
     var ageValue="";

          if ( (age.year > 0) && (age.month > 0) && (age.day> 0) )  
               ageValue = age.year + " years, " + age.month + " months and " + age.day + " days old.";  
          else if ( (age.year == 0) && (age.month == 0) && (age.day > 0) )  
               ageValue = "Only " + age.day + " days old!";  
          else if ( (age.year > 0) && (age.month == 0) && (age.day == 0) )  
               ageValue = age.year +  " years old. Happy Birthday!!";  
          else if ( (age.year == 0) && (age.month > 0) && (age.day == 0) )  
               ageValue= age.month + " months old."; 
          else if ( (age.year > 0) && (age.month > 0) && (age.day == 0) )  
               ageValue = age.year + " years and " + age.month + " months old.";  
          else if ( (age.year == 0) && (age.month > 0) && (age.day > 0) )  
               ageValue = age.month + " months and " + age.day + " days old.";  
          else if ( (age.year > 0) && (age.month == 0) && (age.day > 0) )  
               ageValue = age.year + " years and" + age.day + " days old.";   
          else ageValue= "Welcome to the world..!";   
          return  document.getElementById("age").innerHTML="Your age is: "+ ageValue;


    }
