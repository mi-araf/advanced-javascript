const students = [
    {id: 17, nam: "Sabrina Carpenter"},
    {id: 26, nam: "Ross Lynch"},
    {id: 29, nam: "Lauro Marano"},
    {id: 7 , nam: "Mushfiq Araf"},
]

// 1) map
const names = students.map( s => s.nam);
const ids = students.map( s => s.id);
console.log(names);
console.log(ids);

// 2) filter = find/filter all the element;
const idFilter = students.filter( s => s.id > 20);
console.log(idFilter);

// 3) find = find/filter the first element
const idFind = students.find( s => s.id > 20);
console.log(idFind);

// 4) get the nam: (tradational way)
let newArr = [];
for (let i = 0; i < students.length; i++) {
    let element = students[i];
    let eleName = element.nam;
    // console.log(eleName);
    newArr.push(eleName);
}
console.log(newArr);
console.log(...newArr);

// Araf