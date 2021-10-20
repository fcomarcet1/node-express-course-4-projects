'use strict';

let arr = [3, 4, 5, 6];

// Now imagine you are required to multiply each of the array's elements by 3
/* for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * 3;
} */
//console.log(arr); // [9, 12, 15, 18]

// use the Array.map() method to achieve the same result

let modifiedArr = arr.map(function(element){
    return element * 3;
});

console.log(modifiedArr); // [9, 12, 15, 18]

let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
];

let userFullnames = users.map(function(element){
    return `${element.firstName} ${element.lastName}`;
});

console.log(userFullnames);
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]


const products = [
    {
        id: 1,
        name: 'albany sofa',
        image:'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
        price: 39.95,
        desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade kitsch schlitz irony af flexitarian.`,
    },
    {
        id: 2,
        name: 'entertainment center',
        image:'https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg',
        price: 29.98,
        desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade gluten-free flexitarian.`,
    },
];


const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
});

console.log(newProducts);
/**
 * [
    {
        id: 1,
        name: 'albany sofa',
        image: 'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
    },
    {
        id: 2,
        name: 'entertainment center',
        image: 'https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg',
    }
]
 */