const express = require('express');
require('./config/database');

const app = express();
app.use(express.json());

app.listen(3001, ()=> {
console.log('Servidor foi iniciado');
})

const checklist = require("./src/models/checklist");
async function CriarCheck (){
await checklist.create({
name: "NewCheck"
})
}

//CriarCheck()
const task = require('./src/models/task');
async function CriarTask (){
await task.create({
name: "NewTask",
done: true,
checklist: '65391159146db9df6e6832c7'
})
}
CriarTask()