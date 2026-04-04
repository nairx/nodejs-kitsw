import fs from "fs"
fs.appendFile("students.txt","John",(err)=>{
    if (err) console.log(err)
    console.log("File created successfully")
})
