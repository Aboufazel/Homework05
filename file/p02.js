
const obj = {
    a: 1,
    b: 2
};



function toArray (object){

    let array = Object.entries(object);
    console.log(array);
}


toArray(obj);