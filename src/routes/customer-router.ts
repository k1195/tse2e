
import Customer from '../models/customer-model'
import {Request, Response} from 'express';

async function postCustomer(req:Request,res:Response){
    try {
        const data = await Customer.create({
            firstName: req.body.firstName,
            lastName : req.body.lastName,
            Email    : req.body.email,
        })
       res.status(200).json(data)
    } 
    catch (error) {
        res.status(500).json(error)
    }
}

    // async function getCustomer(req:Request,res:Response){

    //     try {
    //        // const cr = await create()
    //         const data = await create.postPropertyElastic(req.body) 
    //        // res.status(200).json(data)
    //     } catch (error) {
    //         res.status(500).json(error)
    //     }


export default postCustomer;