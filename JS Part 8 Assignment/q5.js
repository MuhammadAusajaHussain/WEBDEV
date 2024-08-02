function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

let object = mergeObjects({
    name: "Ausaja",
    age: 19,
    rollNumber: "22K-5186"
},{
    batch: 2022,
    class: "Junior"
});

console.log(object);