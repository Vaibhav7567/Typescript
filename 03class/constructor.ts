class Flitpay{
    email :string;
    employeeID : string;
    constructor(email : string, employeeID : string)
    {
        this.email = email;
        this.employeeID = employeeID;
    }
}

class Employee extends Flitpay{
    name : string;
    DOB : Date;
    phoneNo: number;

    constructor(name : string, DOB : Date, phoneNo:number, email: string, employeeID: string)
    {
        super(email, employeeID);
        this.name = name;
        this.DOB = DOB;
        this.phoneNo = phoneNo;
    }
}

let employee1 = new Employee("Vaibhav", new Date(),9549997567 , "vaibhav.m@flitpay.in", "FW2022IN73VA" );

console.log(employee1);
