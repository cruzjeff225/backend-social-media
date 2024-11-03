import { Request, Response } from "express";
import User from '../models/userModels'

export const userConection = async (req: Request, res: Response) => {
    try {
        res.send({
            status: 200,
            message: "Success in response"
        })
    } catch (error) {
        res.send({
            status: 400,
            message: "Failed operation"
        })
    }
}
export const newUser = async (req: Request, res: Response) =>{
    try {
        const{name, 
            surname, 
            password, 
            role, 
            image} = req.body

        const newUser = new User({
            name,
            surname,
            password,
            role,
            image
        })
        await newUser.save()

        res.status(201).send({
            message: 'User created successfully',
            user: newUser
        });

    } catch (error) {
        res.status(400).send({
            message: 'Incorrect register',
            error
        })
    }
}

