// function greet(name){
//     return `Hello ${name}!!!`
// }

// console.log(greet(`Class`));

function functionalGreet(fnGetString){
    return `Hello ${fnGetString()}!!!`;
}

function yish(){
    return `Yish`;
}

console.log(functionalGreet(yish));