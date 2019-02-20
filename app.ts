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

