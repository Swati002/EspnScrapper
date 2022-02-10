const fs = require('fs');
const xlsx = require('xlsx')

let buffer = fs.readFileSync('./example.json')

// console.log(buffer)

let data = JSON.parse(buffer)
console.log(data)


data.push({
    "name": "Swati",
    "last name": "Goel",
    "isAbove18": "true",
    "friends": ["Shaily", "Harshit"],
    "age": "19",
    "address": {
        "city": "Ghaziabad",
        "state": "UP"
    }
})
let stringData = JSON.stringify(data)
console.log(stringData)

fs.writeFileSync("./example.json", stringData)



// converting json to xl

// Creating a new Workbook
let newWB = xlsx.utils.book_new();
// JSON is converted to sheet format (rows & cols)
let newWS = xlsx.utils.json_to_sheet(data);
xlsx.utils.book_append_sheet(newWB, newWS, 'Student List');
xlsx.writeFile(newWB, 'abc.xlsx');


// converting xl to json

let wb = xlsx.readFile('abc.xlsx');

let excelData = wb.Sheets['Avengers'];
let ans = xlsx.utils.sheet_to_json(excelData);
console.log(ans)