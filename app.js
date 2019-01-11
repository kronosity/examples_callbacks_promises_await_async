// 3 ways of doing asynchronous code

const fs = require('fs');
const promisify = require('./promisifiedReadFile');


//callback function
fs.readFile('./file.txt', 'utf-8', (err, data) => {
    if(err) {
        throw err
    };
    let firstLine = data;
    fs.readFile('./file2.txt', 'utf-8', (err, data) => {
        if(err) throw err;
        let secondLine = data;
        console.log(firstLine, secondLine)
    });
});

//Promises .then chaining 
let firstLine;
promisify('./file.txt', 'utf-8')
.then((data)=>{
    firstLine = data;
    return promisify('./file2.txt', 'utf-8')
})
.then((data)=> {
    let secondLine = data;
    console.log(firstLine, secondLine);
})
.catch((err)=>{
    console.log(err)
});

//promises using async & await es8
async function readFile() {
    let firstLine  = await promisfy('./file.txt', 'utf-8');
    let secondLine = await promisify('./file.txt', 'utf-8');
    console.log(firstLine, secondLine)
}
readFile();


