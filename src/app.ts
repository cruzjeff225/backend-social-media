//Config my server
import express  from "express";
import cors from 'cors';
import morgan from "morgan";
import UserRoute from "./routes/user.routes"


const app = express()
app.set('port', process.env.PORT || 4000)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/social', UserRoute) 

app.get('/ping', (req:express.Request, res:express.Response) =>{
    try {
        res.json({message: "Hello world"})
    } catch (error) {
        console.log(error)
    }
})

export default app