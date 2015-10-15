//create objects for each employee

var atticusObj = {
  name: "Atticus",
  employeeNumber: "2405",
  baseSalary: "47000",
  reviewScore: 3
};

var jemObj = {
  name: "Jem",
  employeeNumber: "62347",
  baseSalary: "63500",
  reviewScore: 4
};

var booObj = {
  name: "Boo",
  employeeNumber: "11435",
  baseSalary: "54000",
  reviewScore: 3
};

var scoutObj = {
  name: "Scout",
  employeeNumber: "6243",
  baseSalary: "74750",
  reviewScore: 5
};

var array = [atticusObj, jemObj, booObj, scoutObj];

for(var i = 0; i < array.length; i++){
    array[i] = calculateSTI(array[i]);
}


$(document).ready(function(){

  for(var i = 0; i < array.length; i++){
    $("#container").append("<div class='userContainer'></div>");
    var $el = $("#container").children().last();
    $el.append("<p id='name'>" + array[i].name + "</p>");
    $el.append("<p>" + array[i].bonusSTIPercent + "</p>");
    $el.append("<p>" + array[i].adjSalary + "</p>");
    $el.append("<p>" + array[i].bonusAmount + "</p>");
    $el.append("<button class='employeeButton'>Employee Information</button>");
  }

  showEmployeeName(array);
      
});

function showEmployeeName(object){
  $("#container").on("click",".employeeButton", function(){
    //Original challenge
      //for(var i = 0; i < array.length; i++){
        //console.log(array[i].name);  
      //}
    //Hard Mode  
        //console.log($(this).siblings('#name').text());
    // Pro Mode      
        $(this).parent().remove();  
  });
}

function calculateSTI(object){
  //var newArray = [];
  var newObject = new Object();

  //newArray[0] = object.name;
  newObject.name = object.name;

  var employeeNumber = object.employeeNumber;
  var baseSalary = object.baseSalary;
  var reviewScore = object.reviewScore;

  var bonus = getBaseSTI(object.reviewScore) + getYearAdjustment(object.employeeNumber) - getIncomeAdjustment(object.baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  //newArray[1] = bonus;
  newObject.bonusSTIPercent = bonus;
  //newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newObject.adjSalary = Math.round(baseSalary * (1.0 + bonus));   
  //newArray[3] = baseSalary * bonus;
  newObject.bonusAmount = baseSalary * bonus;
  //console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  
  //console.log(newObject);

  return newObject;  
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}