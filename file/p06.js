let a = new Object();
let b = new Array();

a = {
    a: 2,
    b: 'c',
    c: 4,
    fname:{
        e: 6,
        f: 'c',
        g: 9
    }
};

b = [2 , 3 , 'd' , '5' , '8']









makeArray(a , b);

function findInt (array){
    
    for (let i = 0 ; i < array.length ; i++){

        if(Number.isInteger(array[i]) === true ){
            console.log(array[i]);
        }
    }
}


/*for(let key in obj){
    if (typeof obj[key] === 'object'){
        copy[key]={}
        makeArray(obj[key] , copy[key]);
        let array = Object.values(copy);
        let push = arr.concat(array);
    }else{
       copy[key] = obj[key];
       let array = Object.values(copy);
       
       console.log(push);
    }
}*/




function makeArray (obj , arr){
     let copy ={};
     for(let key in obj){
        if (typeof obj === 'object'){
            let array = arr.push(obj)
            let push = arr.concat(array);
            console.log(push);
         }
     }

    
}
