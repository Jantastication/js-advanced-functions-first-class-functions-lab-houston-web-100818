// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length -2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 
 
function createFareMultiplier(integer){
    return function multiply(fare){
        return fare * integer
    }
} 

const fareDoubler = function createFareMultiplier(integer){
    return integer * 2
}

const fareTripler = function(integer){
    return integer * 3
}

function fetchSpecifiedDrivers(drivers, callback){
    return callback(drivers)
}