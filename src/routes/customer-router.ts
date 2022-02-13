
import Customer from '../models/customer-model'
import {Request, Response,Router} from 'express';
import myEmitter from 'src/events/event';

const router = Router(); 

router.post('/add',async function postCustomer(req:Request,res:Response){
    try {
        const data = await Customer.create({
            firstName: req.body.firstName,
            lastName : req.body.lastName,
            Email    : req.body.email,
        })
       myEmitter.emit('created',req.body.email,req.body.firstName)
       res.status(200).json(data)
    } 
    catch (error) {
        res.status(500).json(error)
    }
})

router.get('/get',async function getCustomer(req:Request,res:Response){
    try {
        const data = await Customer.findAll()
       res.status(200).json(data)
    } 
    catch (error) {
        res.status(500).json(error)
    }
})

 
export default router;