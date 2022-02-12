import { Router } from 'express';
import userRouter from './user-router';
import postCustomer from './customer-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);


 baseRouter.route('/customerAdd').post(postCustomer);

//baseRouter.route('/customerGet').get(getCustomer));

// Export default.
export default baseRouter;
