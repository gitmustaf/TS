//Basic Types
var developerName = 'Mustaf';
var age = 25;
var active = true;
var x = 'Hello';
//Array 
var workWeek = [8, 7, 8, 6, 7];
//Tuple 
var person = ['Mr. x', 34, true];
//Tuple array 
var student = [['Mustaf', 'B.Tech', 32], ['Rahul', 'BCA', 74]];
//Unions
var id;
id = '21';
id = 21;
//id = true (can't store other then string | number)
//Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
//Objects 
var user = {
    id: 1,
    userName: 'Musu'
};
var user2 = {
    id: 2,
    userName: 'Dummy'
};
//Type Assertion
var cid = 1;
var customerId = cid;
customerId = cid;
//Function
function addition(num1, num2) {
    return num1 + num2;
}
;
var user1 = {
    id: 1,
    name: 'Mustaf'
};
//Classes 
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered;");
    };
    return Person;
}());
var musu = new Person(1, "Mustaf");
console.log(musu.id);
console.log(musu.register());
console.log("Developer: ", developerName);
console.log(Direction1.Left);
console.log(addition(2, 6.90232312335));
