"use strict";
exports.__esModule = true;
var isOpen = false;
var Name = 'Scott';
var myAge = 32;
var list = [0, 1, 2];
var me = ["Scott", 32];
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["PM"] = 2] = "PM";
})(Job || (Job = {}));
var job = Job.WebDev;
var phone = "iPhone";
var sayHello = function (word) {
    var converted = JSON.stringify(word);
    return JSON.stringify(converted);
};
sayHello({ name: "frank" });
var newName = 'Scott';
var newNameTwo = newName;
var makeMargin = function (x) {
    return "margin: " + x + "px";
};
makeMargin(10);
makeMargin("10");
var dog = "Sammy";
console.log({ dog: dog });
dog = null;
dog = "Lucie";
dog = undefined;
dog = null;
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    age ? console.log(age) : console.log('no age given');
    return { name: name, age: age };
};
sayName({ age: 32, name: 'Scott' });
var Enums_1 = require("./Enums");
var createContent = function (contentType) {
    console.log(contentType);
};
createContent(Enums_1.Type.Quiz);
var Type2;
(function (Type2) {
    Type2["Video"] = "VIDEO";
    Type2["BlogPost"] = "BLOG_POST";
    Type2["Quiz"] = "QUIZ";
})(Type2 || (Type2 = {}));
var createContent2 = function (contentType) {
    console.log(contentType);
};
createContent2(Type2.Quiz);
var Team = (function () {
    function Team(teamName) {
        this.teamName = teamName;
        this.teamType = "Hockey";
    }
    Team.prototype.score = function () {
        console.log(this.teamName + ": GOOOOOOAAALLL!");
        return "YOYOOYOYOYOY!";
    };
    return Team;
}());
var RedWings = new Team('Red Wings');
RedWings.score();
