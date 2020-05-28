var d = new Date();
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
// Select the 24th of December with integer.
var dateleft = 24 - date;
var monthleft = 11 - month;

// If the date selected has been passed, it rolls over to the next year.
if (monthleft == 0 && dateleft < 0) {
    var monthleft = monthleft + 11;
}

/*If the month left counter goes into the negative, it takes the negative number, 
 adds the current month, and then an extra month to make up the difference.*/
if (monthleft < 0) {
    var monthleft = monthleft + month + 1;
}

/* If the days left counter goes into the negative, it first checks the current month.
It then checks the amount of days in that month, and adds it to the negative dateleft variable. */
if (dateleft < 0) {
    if (month == 3 || month == 5 || month == 8 || 10) {
        var dateleft = dateleft + 30;
    }
    else if (month == 1) {
        // If it is February, it checks if the year is a leapyear or not.
        if (year % 4 == 0) {
            var dateleft = dateleft + 29;
        }
        else {
            var dateleft = dateleft + 28;
        }
    }
    else {
        var dateleft = dateleft + 31;
    }
}
// If the month counter equals zero, it hides the secondary counter.
if (monthleft == 0 && dateleft > 0) {
    $("#countdown2").hide();
}

// If it's Christmas Eve, hide the countdown and reveal the secret message.
if (date === 24 && month === 11) {
    $("#countdown1").hide();
    $("#countdown2").hide();
    $("#timeleft").hide();
    $("#christmas").show();
}
// If not, append the countdown message and timer. 
else {
    $("#title").append("It's not Christmas yet! There's still..");
    // If there is only one day left, remove the plural s.
    if (dateleft > 1) {
        $("#countdown1").append(dateleft + " days");
    }
    else {
        $("#countdown1").append(dateleft + " day");
    }

    // Make the same check for the month counter
    if (monthleft > 1) {
        $("#countdown2").append(monthleft + " months");
    }
    else {
        $("#countdown2").append(monthleft + " month");
    }

    // Adds final message. 
    $("#timeleft").append("left until Christmas Eve!");
}