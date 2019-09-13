/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    });

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
};

let createEmployeeRecord = function (empl) {
    return {
        firstName: empl[0],
        familyName: empl[1],
        title: empl[2],
        payPerHour: empl[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

let createEmployees = function (employees) {
    return employees.map(employee => createEmployeeRecord(employee))
};

let createEmployeeRecords = function (employees) {
    return employees.map(employee => createEmployeeRecord(employee))
};

let createTimeInEvent = function (date) {
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    };

    this.timeInEvents.push(timeIn);

    return this;
};

let createTimeOutEvent = function (date) {
    let timeOut = {
        type: "TimeOut",
        date: date.split(" ")[0],
        hour: parseInt(date.split(" ")[1])
    };

    this.timeOutEvents.push(timeOut);

    return this;
};

let hoursWorkedOnDate = function (date) {
    let timeIn = this.timeInEvents.find(event => event.date === date).hour;
    let timeOut = this.timeOutEvents.find(event => event.date === date).hour;

    return (timeOut - timeIn) / 100;
};

let wagesEarnedOnDate = function (date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
};

let findEmployeebyFirstName = function (srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName)
}

let calculatePayroll = function(srcArray) {
    return srcArray.reduce((accu, curr) => accu + allWagesFor.call(curr), 0)
}