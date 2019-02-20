/**
 * 模块、函数、变量、语句和表达式、注释
 */
var message = "Hello world!";
console.log(message);
//tsc app.ts and tsc app.ts app1.ts app2.ts ... 编译多个
var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.speak = function () {
        console.log('Hello Human');
    };
    return People;
}());
var obj = new People();
obj.speak();
