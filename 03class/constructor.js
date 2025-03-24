var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Flitpay = /** @class */ (function () {
    function Flitpay(email, employeeID) {
        this.email = email;
        this.employeeID = employeeID;
    }
    return Flitpay;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, DOB, phoneNo, email, employeeID) {
        var _this = _super.call(this, email, employeeID) || this;
        _this.name = name;
        _this.DOB = DOB;
        _this.phoneNo = phoneNo;
        return _this;
    }
    return Employee;
}(Flitpay));
var employee1 = new Employee("Vaibhav", new Date(), 9549997567, "vaibhav.m@flitpay.in", "FW2022IN73VA");
console.log(employee1);
