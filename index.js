// Write your solution in this file!
const employee = {
    name : "Alvin Gikunju" ,
    streetAdress : 600-45,
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // create a copy of the original employee object
    const updatedEmployee = {...employee};
    
    // update the employee object with the new key/value pair
    updatedEmployee[key] = value;
    
    // return the updated employee object
    return updatedEmployee;
  }
  

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return  newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

