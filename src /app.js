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
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.gree = function () {
        return "Hello" + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement('buton');
button.textContent = 'SayHello';
button.onclick = function () {
    alert(greeter.gree());
};
document.body.appendChild(button);
//基础类型
//any 赋予任意类型的的值
var binarycode = 10; //二进制
var octalLiteral = 484; // 八进制
var decLiteral = 6; // 十进制
var hexLiteral = 0xf00d; //十六进制
var nickname = 'kevin';
var years = 6;
var words = "\u591A\u884C\u6587\u672C\u53CA\u5185\u5D4C\u8868\u8FBE\u5F0F\uFF0C" + nickname + " " + years + " \u5C81 ";
var flag = true;
var arr = [1, 2];
var arr1 = [1, 2];
//元组
var x;
x = ['hello', 1];
console.log(x[0]);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
//void 
function hello() {
    console.log('void functon is not have return value');
}
// null undefined never TypeScript 和 JavaScript 没有整数类型。
//Any 类型 变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查
var a = 1;
a = 'Who am i'; //string
a = false; //boolean
//改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查
var b = 6;
b.ifExists(); //正确，ifItExists方法在运行时可能存在，但这里并不会检查
b.toFixed(); //true
//定义存储各种类型数据的数组时
var arrayList = [1, false, 'fine'];
arrayList[1] = 100;
//类型断言 Type Assertion 可以用来手动指定一个值的类型 <类型>值 or 值 as 类型
var str = '1';
var str2 = str; //str as string
console.log(str2);
var num = 12;
var result = num > 0 ? "大于0" : "小于0,或等于0";
console.log(result);
var typeNum = 12;
console.log(typeof typeNum); // number
//instanceof 判断对象是否为指定的类型
