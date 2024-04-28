// function callback(){
//     console.log("manish is calling a callback function")
// }
const add = function(a,b, callback){
    var result = a+b;
    console.log(result);
    callback();
}

add(5,22, () => console.log("manish is calling a callback function"));