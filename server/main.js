import express from "express"
import cors from "cors"
import morgan from "morgan"
import {config} from "dotenv"
import connect from "./database/conn.js"
import router from './router/router.js'
const app =express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config()
app.use('/api',router)
app.get('/',(req,res)=>{
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error) 
    }})

const port=process.env.PORT||3004

connect().then(()=>{
    try{
app.listen(port,()=>
console.log(`server connected to http://localhost:${port}`)
)
    }catch(error){
        console.log("Cannot connect to the server")

    }
}).catch(err=>{
    console.log("Invalid Database Connection");
})
