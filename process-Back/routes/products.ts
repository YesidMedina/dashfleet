import { Router } from 'express';
import { getProducts, getProduct, postProduct, putProduct, deleteProduct } from '../controllers/products';

const router = Router();

router.get( '/', getProducts );
router.get( '/:id', getProduct );
router.post( '/', postProduct  );
router.put( '/:id', putProduct );
router.delete( '/:id', deleteProduct );

export default router;