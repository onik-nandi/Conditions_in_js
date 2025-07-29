// Task no-1
var burgerPrice = 600;
var cokePrice = 30;
if (burgerPrice > 500) {
  console.log("Coke is Free");
} else {
  console.log(cokePrice);
}

// Task - 3;

var marks = 40;

if (marks >= 90 && marks <= 100) {
  console.log("Grad-A");
} else if (marks >= 80 && marks <= 89) {
  console.log("Grade -B");
} else if (marks >= 70 && marks <= 79) {
  console.log("Grade -C");
} else if (marks >= 60 && marks <= 69) {
  console.log("Grade -D");
} else {
  console.log("Fail");
}
// Tasks  4 nested

var myMarks = 81;
var freindMarks = 81;

if (myMarks > 80) {
  if (freindMarks > 80) {
    console.log("Go for lunch");
  } else {
    if (freindMarks > 60) {
      console.log("Good Luck next Time");
    } else {
      if (freindMarks >= 40) {
        console.log("SMS Keep Unseen");
      } else {
        console.log("block kha shala");
      }
    }
  }
} else {
  console.log("Go home & Sleep");
}

// task 5

var num1 = 33;
var num2 = 30;
if (num1 > num2) {
  var total = num1 * 2;
  console.log(total);
} else {
  console.log(num1 + num2);
}

num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2);

// task 6 ticket fare calculator

var age = 51;
var students = false;
var ticketPrice = 800;

if (age < 10) {
  console.log("Ticket free for childrens");
} else if (students == true) {
  var studentDiscount = (ticketPrice * 50) / 100;
  var studentPrice = ticketPrice - studentDiscount;
  console.log(studentPrice);
} else if (age >= 60) {
  var seniorDiscount = (ticketPrice * 15) / 100;
  var seniorPrice = ticketPrice - seniorDiscount;
  console.log(seniorPrice);
} else {
  console.log(ticketPrice);
}
