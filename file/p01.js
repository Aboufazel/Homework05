let arr = new Array();
arr = [18 , 19 ,'15' , 80 , 90 ,'150' , '250'];

trueValue(arr);

function trueValue (arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] === 'number'){
            console.log('true');
            console.log(i);
        } else {
            console.log('false');
            console.log(i);
        }
    }

}