let num ;

fillArray('224241');



function fillArray (number){
    let i = 0;
    var a = [];
    while(Math.round(number) > 0){
        var b = number % 10;
        b = b.toPrecision(1);
        a.push(b);
        number /= 10;
        i++;
    }
     
    console.log(a);
    for (let i = 0 ; i < a.length ; i++){
         
        if (a[i] % 2 == 0 && a[i+1] % 2 == 0){
                console.log(a[i] , "_" , a[i+1]);

        }
    }

}

 