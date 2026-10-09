let employeeDetails:
{
    employeeName:String,
    empoyeeId:number,
    department?:string,
    isActive:boolean,
    salary:number
    newProperty?:string
}=
{
    employeeName:"Aarthy",
    empoyeeId:2303,
    department:"Testing",
    isActive:true,
    salary:1433454
   
}

//Print values
console.log("Name "+employeeDetails.employeeName);
console.log("ID "+employeeDetails.empoyeeId);
console.log("Department "+employeeDetails.department);
console.log("Is Active "+employeeDetails.isActive);

//Update salary and isActive

employeeDetails.salary = 2500000;
employeeDetails.isActive=false;

//add newproperty
employeeDetails.newProperty="Chennai";

//delete department
delete employeeDetails.department;


//Print values
console.log("Name "+employeeDetails.employeeName);
console.log("ID "+employeeDetails.empoyeeId);
console.log("Department "+employeeDetails.department);
console.log("Is Active "+employeeDetails.isActive);
console.log("Salary "+employeeDetails.salary);
console.log("New property "+employeeDetails.newProperty);

