import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:alura@alura.14xe5je.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection

export default db