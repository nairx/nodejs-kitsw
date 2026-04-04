import fs from "fs";
fs.appendFile("students.txt", "John", (err) => {
  if (err) console.log(err);
  console.log("File created successfully");
});
fs.readFile("students.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
fs.unlink("students.txt", (err) => {
  if (err) console.log(err);
  console.log("File Deleted");
});
