import { Router } from 'express';
import { getClients, getOrderDetail, postClient, putClient, deleteClient} from '../controllers/clients';

const router = Router();

router.get( '/', getClients );
router.get( '/:id/:orderId', getOrderDetail );
router.post( '/', postClient  );
router.put( '/:id', putClient );
router.delete( '/:id', deleteClient );


export default router;