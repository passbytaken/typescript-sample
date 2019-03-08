var num: number = 5;
if (num > 0) {
    console.log("NUMBER")
}

var num: number = 12;
if (num % 2 == 0) {
    console.log("偶数")
} else {
    console.log("奇数")
}

var grade: string = 'A';
switch(grade) {
    case 'A': {
        console.log("good");
        break;
    }
    case 'B': {
        console.log("ok");
        break;
    }
    case 'C': {
        console.log("fine");
        break;
    }
    default: {
        console.log("unlegal")
        break;
    }
}

 var num: number = 5;
 var i: number;
 var factorial =1;

 for(i = num; i>=1; i--) {
     factorial *= 1;
 }
 console.log(factorial)

 var j: any;
 var n: any = "a b c"

 for(j in n) {
     console.log(n[j]);
 }

 let someArray = [1, "hello", false];
  for (let entry of someArray) {
      console.log(entry);
  }

  let list = [4, 5, 6];
  list.forEach((val, idx, array) => {
      // val: 当前值
      // idx：当前index
      // array: Array
  })
  let list1 = [4, 5, 6];
  list.every((val, idx, array) => {
      // val: 当前值
      // idx：当前index
      // array: Array
  })

  var num: number = 5;
  var factorial: number = 1;
   while(num >= 1) {
       factorial = factorial * num;
       num--;
   }
   console.log(factorial)

function greet(): string {
    return "Hello Ty"
}
function caller() {
    var msg = greet()
    console.log(msg)
}
caller()

function add(x: number, y: number): number {
    return x + y;
}
console.log(add(1,2))
//可选参数和默认参数

function buildName(firstName: string, secondName?: string) {
    return firstName + " " + secondName;
}
let res = buildName("kevin");

function calcDiscount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log(discount);
}
calcDiscount(10000)
calcDiscount(10000, 0.30)
//剩余参数

function getGoods(firstGood: string, ...resOfGood: string[]) {
    return firstGood + " " + resOfGood.join(" ");
}

let goodName = getGoods("coffee", "cola", "chips", "milk")
//匿名函数
 var res1 = function() {
     return "Hello"
 }
 console.log(res1);

 var res2 = function(a: number, b: number) {
     return a * b;
 }
 console.log(res2(2, 3))
// 构造函数
 var res3 = new Function("a", "b", "return a * b");
 var y = res3(4, 3);
 console.log(y);
 //递归
function func(number) {
    if (number <= 0){
        return 1;
    } else {
        return (number * func(number - 1));
    }
}
console.log(func(6))
//Lambda function
var foo = (x: number)=>10 + x
console.log(foo(100))

var foo1 = (x: number)=> {
    x+=10;
    console.log(x)
}
foo1(100)
//不指定函数的参数类型，通过函数内来推断参数类型
var func1 = (x)=> {
    if (typeof x == 'number') {
        console.log(x + 'is a number')
    } else if (typeof x == 'string') {
        console.log(x + 'is a string')
    }
}
func1(112)
func1('Happy')
//单个参数 () 是可选的：
var display = x => {
    console.log(x)
}
display(12)
//无参数时可以设置空括号：
var disp = () => {
    console.log("Function invoked");
}
disp();
//函数重载
function same(s1: string): void;
function same(n1: number, n2: string): void;

function same(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}
same('abc')
same(1, 'xyz')


