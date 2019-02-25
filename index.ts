//变量作用域

var global_num = 12 //全局变量
class Numbers {
    num_val = 13; //类变量
    static sval = 10; //静态变量

    storeNum(): void {
        var local_num = 14; //局部变量
    }
}
console.log(global_num)
console.log(Numbers.sval)
var obj1 = new Numbers();
console.log("类变量是" + obj1.num_val);