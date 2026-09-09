const path =require("path")
const filepath="/user/shahma/project/app.js"
console.log(path.dirname(filepath))
console.log(path.basename(filepath))
console.log(path.extname(filepath))
console.log(__dirname)


const fullpath=path.join(__dirname,"public","images","logo.png")
console.log(fullpath)

// to get full path we can use resolve
console.log(path.resolve("files","data.text"))