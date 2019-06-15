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
	})

	let payable = eligibleDates.reduce(function (memo, d) {
			return memo + wagesEarnedOnDate.call(this, d)
	}.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

	return payable
}

const createEmployeeRecord = (arr) => {
  return {
    firstName: arr[0],
		familyName: arr[1],
		title: arr[2],
		payPerHour: arr[3],
		timeInEvents: [],
		timeOutEvents: []
	}
}

const createEmployees = (employees) => {
  return employees.map(employee => createEmployeeRecord(employee))
}

const createTimeInEvent = function(datestamp){
  let [date, hour] = datestamp.split(" ")
  this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
  })
  return this
}

const createTimeOutEvent = function(datestamp){
  let [date, hour] = datestamp.split(" ")
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10)
  })
  return this
}

const hoursWorkedOnDate = function(datestamp){
  let [date, hour] = datestamp.split(" ")
  let inRecord = this.timeInEvents.find(record => record.date === date)
  let outRecord = this.timeOutEvents.find(record => record.date === date)
  return (outRecord.hour - inRecord.hour) / 100
}

const wagesEarnedOnDate = function(datestamp){
  return hoursWorkedOnDate.call(this, datestamp) * this.payPerHour
}

const calculatePayroll = function(records){
  return records.reduce(((accu, curr) => accu + allWagesFor.call(curr)), 0)
}

const createEmployeeRecords = function(records){
  return records.map(record => createEmployeeRecord(record))
}

const findEmployeebyFirstName = function(employees, name){
  return employees.find(employee => employee.firstName === name)
}