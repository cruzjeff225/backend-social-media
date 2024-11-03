import mongoose from "mongoose";

const conection = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/socialmedia')
        console.log("Successful connection to the DB")
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    conection
}

