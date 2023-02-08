/* Question 4*/

        // var userNum1, userNum2, userNum3;
        // function findLargest(num1, num2, num3) {

        //     if(num1 > num2 && num1 > num3){
        //     document.write(num1, ' is the largest number');
        //     }
        //     else if (num2 > num3){
        //     document.write(num2, ' is the largest number');
        //     }
        //     else{
        //     document.write(num3, ' is the largest number');
        //     }
        // }

        // userNum1 = parseInt(prompt("Please enter first number.", "3"));
        // userNum2 = parseInt(prompt("Please enter second number.", "7"));
        // userNum3 = parseInt(prompt("Please enter third number.", "1"));
        // findLargest(userNum1, userNum2, userNum3);


/* Question 5*/

        // var userNum1, userNum2, userNum3;
        // function findTriangleType(side1, side2, side3) {

        //     if((side1 == side2) && (side1 == side3)){
        //         document.write("Equilateral triangle.");
        //     }
        //     else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
        //         document.write("Isosceles triangle.");
        //     }
        //     else{
        //         document.write("Scalene triangle.");
        //     }
        // }
        // userNum1 = parseInt(prompt("Please enter first side.", "3"));
        // userNum2 = parseInt(prompt("Please enter second side.", "7"));
        // userNum3 = parseInt(prompt("Please enter third side.", "1"));
        // findTriangleType(userNum1, userNum2, userNum3);

/* Question 6*/

        // var userNum1, userNum2, userNum3;
        // function checkInRange(num, start, end) {

        //     if(num >= start && num <= end){
        //         document.write( num + " is between the range " + start + " and " + end);
        //     }
        //     else{
        //         document.write( num + " is outside the range " + start + " and " + end);  
        //     }
        //   }
        // userNum1 = parseInt(prompt("Please enter start of range.", "3"));
        // userNum2 = parseInt(prompt("Please enter end of.", "7"));
        // userNum3 = parseInt(prompt("Please enter the number to be searched", "1"));
        // checkInRange(userNum3, userNum1, userNum2);

/* Question 7*/

        // var userNum1, userNum2, operator;
        // userNum1 = parseInt(prompt("Please enter first number"));
        // operator = prompt("Please enter operator \nOnly: " + " +, " + " -, " + " *, " + " /, " + " %");
        // userNum2 = parseInt(prompt("Please enter second number"));

        // switch(operator){

        //     case '+':
        //         alert(userNum1 + userNum2);
        //         break;

        //     case '-':
        //         alert(userNum1 - userNum2);
        //         break;
                
        //     case '*':
        //         alert(userNum1 * userNum2);
        //         break;
                
        //     case '/':
        //         alert(userNum1 / userNum2);
        //         break;

        //     case '%':
        //         alert(userNum1 % userNum2);
        //         break;

        //     default:
        //         alert("Not a valid operation");
        //         break;
        // }

/* Question 8*/

        // var userYear, userYearLength;
        // userYear = parseInt(prompt("Please enter a year in 4 digit format", "1996"));
        // userYearLength = userYear.toString()
        // if(userYear%4 == 0 && userYearLength.length == 4 ) {

        //     alert(userYear + " is a leap year");

        // }
        // else if(userYear%4 !== 0 && userYearLength.length == 4 ){
    
        //     alert(userYear + " is not a leap year");

        // }
        // else{

        //     alert("Input does not match the available parameters\nPlease provide a valid input");

        // }


/* Question 9*/

        // var userName, userMarks;
        // function findGrade(name, marks) {

        //     if(marks >= 90 && marks <= 100){
        //         document.write(name, " you have received S grade.");
        //     }
        //     else if(marks >= 80 && marks < 90){
        //         document.write(name, " you have received A grade.");
        //     }
        //     else if(marks >= 70 && marks < 80){
        //         document.write(name, " you have received B grade.");
        //     }
        //     else if(marks >= 60 && marks < 70){
        //         document.write(name, " you have received C grade.");
        //     }
        //     else if(marks >= 50 && marks < 60){
        //         document.write(name, " you have received D grade.");
        //     }
        //     else if(marks >= 40 && marks < 50){
        //         document.write(name, " you have received E grade.");
        //     }
        //     else if(marks >= 0 && marks <40){
        //         document.write(name, " you have Failed!");
        //     }
        //     else{
        //         document.write("Invalid marks of " + marks);
        //     }
        //   }
        //   userName = prompt("Please enter your name", "John Doe");
        //   userMarks = parseInt(prompt("Please enter your marks", "67"));
        //   findGrade(userName, userMarks);
          

/* Question 10*/

        // var userMonth, userYear;
        // function isLeapYear(year){

        //     return (((year%4 == 0)&&(year%100 != 0))||(year%400 == 0));
        //   }
          
        //   function findDaysInMonth(month, year) {
          
        //     if(month < 1 || month > 12){
        //       document.write("Invalid Month");
        //       return;
        //     }
          
        //     if(month ==2){
        //       if(isLeapYear(year)){
        //          document.write("The Month has 29 days");
        //       }
        //       else{
        //          document.write("The Month has 28 days");
        //       }
        //     }
        //     else if(month == 4 || month == 6 || month == 9 || month== 11){
        //         document.write("The Month has 30 days");
        //     }
        //     else{
        //         document.write("The Month has 31 days");
        //     }
        //   }
        //   userMonth = parseInt(prompt("Please enter the month in numerical form", "10"));
        //   userYear = parseInt(prompt("Please enter the year in numerical form", "1991"));
        //   findDaysInMonth(userMonth, userYear);