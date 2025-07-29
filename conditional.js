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

