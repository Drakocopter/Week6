data = [
    {
        name: `class`
    },
    {
        name: `Kevin`
    },
    {
        name: `Yish`
    }
];
function greet(text) {
    return `Hello ${text}!!!`
}

// for(item of data){
//     console.log(greet(item.name))
// }
function print(item) {
    console.log(greet(item.name))
}

data.forEach(item => console.log(greet(item.name)))
data.forEach(item => console.log(`Hello ${item.name}!!!`));

[12,34,56].forEach(n => console.log(n))

//if more than one parameter, parenthesis required

//more than one statement, braces required.

numbers = [12,34,56];
// pn = n => console.log(n);

numbers.forEach(n => console.log(n));

menu = {
Breakfast : [
    {name:`Pankcakes`, price:3.99},
    {name:`Waffles`, price:2.54},
],
Lunch: [
    {name: `Sandwich`, price: 5.23},
    {name: `Fries`, price: 1.34},
]
}

// keys = Object.keys(menu)
// for(m of keys){
//     console.log(m)
//     for(item of menu[m]){
//         console.log(item.name, item.price);
//     }
// }

Object.keys(menu).forEach(m => menu[m].forEach(item => console.log(m + ":\n", "\t" + item.name + ",", "Price: " + item.price)));

// "\t" for tab