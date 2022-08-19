function sumArray(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}

let a = new Array();
let b = new Array();

a = [1 , 0 , 2 , 3 , 4];
b = [3 , 5 , 6 , 7 , 8 ,13];


console.log(sumArray(a , b));