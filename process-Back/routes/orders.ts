import { Router } from 'express';
import { getOrders, getOrder, postOrder, putOrder, deleteOrder } from '../controllers/orders';

const router = Router();

router.get( '/', getOrders );
router.get( '/:id', getOrder );
router.post( '/', postOrder  );
router.put( '/:id', putOrder );
router.delete( '/:id', deleteOrder );

export default router;