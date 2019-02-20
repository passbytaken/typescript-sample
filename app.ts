/**
 * 模块、函数、变量、语句和表达式、注释
 */
var message:string = "Hello world!"
console.log(message)
//tsc app.ts and tsc app.ts app1.ts app2.ts ... 编译多个

class People {
    speak():void {
        console.log('Hello Human');
    }
}
var obj = new People();
obj.speak();

// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     gree() {
//         return "Hello" + this.greeting
//     }
// }

// let greeter = new Greeter("world");

// let button = document.createElement('buton');
// button.textContent = 'SayHello';
// button.onclick = function() {
//     alert(greeter.gree());
// }
// document.body.appendChild(button);

//基础类型
//any 赋予任意类型的的值

let binarycode: number = 0b1010;    //二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d; //十六进制

let nickname: string = 'kevin';
let years: number = 6;
let words: string = `多行文本及内嵌表达式，${nickname} ${years} 岁 `;

let flag: boolean = true;

let arr: number[] = [1, 2];
let arr1: Array<number> = [1, 2];

//元组
let x: [string, number];
x = ['hello', 1];
console.log(x[0]);

//enum
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);

//void 
function hello(): void {
    console.log('void functon is not have return value')
}

// null undefined never TypeScript 和 JavaScript 没有整数类型。

//Any 类型 变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查
let a: any = 1;
a = 'Who am i' //string
a = false; //boolean
//改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查
let b: any = 6;
b.ifExists(); //正确，ifItExists方法在运行时可能存在，但这里并不会检查
b.toFixed(); //true

//定义存储各种类型数据的数组时
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;

//类型断言 Type Assertion 可以用来手动指定一个值的类型 <类型>值 or 值 as 类型

var str = '1'
var str2: number = <number> <any> str //str as string
console.log(str2);






