import { v4 as uuidv4 } from "uuid"
import chalk from "chalk"

function createuser(name){
const user={
    id:uuidv4(),
    name:name
}
console.log(chalk.green("user created successfully"))
console.log(chalk.blue(`user id:${user.id}`))
console.log(chalk.yellow(`user name:${user.name}`))

}
createuser("shahma")
createuser("hanna")