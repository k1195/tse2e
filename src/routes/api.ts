import { Router } from 'express';
import userRouter from './user-router';
import customerRouter from './customer-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);


 baseRouter.use('/customer',customerRouter);

//baseRouter.route('/customerGet').get(getCustomer));

// Export default.
export default baseRouter;
