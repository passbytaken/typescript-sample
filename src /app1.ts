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

   
