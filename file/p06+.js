let a = new Array();
let b = new Object();

a = [];

b = {
    a : 7,
    b : 6,
    c : {
        s: 3,
        e : '18',
        d: 1
        
    },
    j : {
        q: 5,
        s : '19',
        l: 0
    }
}


makeObject(b , a);




function makeObject(obj , arr) {
    let array = [];
    let b , c = [];
    for (let key in obj){
        if(obj[key] === 'object'){
            b = Object.values(obj);
        }else {
            c = Object.values(obj);
            
        }
    }
   

    array = Object.values(c);

    let oArray = [];
    let nArray = [];
    for (let i = 0 ; i < array.length ; i++){

        if (typeof array[i] === 'object'){
            oArray = Object.values(array[i]);
            nArray = oArray.concat(nArray);
        }
    }
    array = nArray.concat(array);

    array = arr.concat(array);

    for (let i = 0 ; i < array.length ; i++){
        if (Number.isInteger(array[i]) === true){
            console.log(array[i]);
        }
    }
}

