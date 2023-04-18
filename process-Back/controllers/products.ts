
import { Request, Response } from 'express';
import Products from '../models/products'; 

export const getProducts = async( req: Request, res: Response ) => {

    try { 
        const products = await Products.findAll();
        res.json( products )
    } catch (error) {
        res.json('Error server');            
    }
}

export const getProduct = async( req: Request, res: Response ) => {

    const { id } = req.params;

    const product = await Products.findByPk(id);
        if( !product ) {
            res.status( 204 ).json({
                msg: 'ID not found'
            })
        }
    res.json( product );
}

export const postProduct = async( req: Request, res: Response ) => {

    const { body } = req;

  /*   const productFound = await Products.findOne({
        
    })
    if ( productFound ) {
        return res.status( 301 ).json({
            msg: 'poner texto'
        })
    }
 */
    const product = await Products.create( body );

    const save = await product.save();

    res.json( save );
    
}

export const putProduct = async( req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    
    try {
        const product = await Products.findByPk( id );
    if( !product ) {
        res.status( 404 ).json({
            msg: 'ID not found'
        })
    }       
    await product?.update( body )
    res.json( product )
    } catch (error) {
        console.log(error);
        res.status( 500 ).json({
            msg: 'Not found'
        })             
    } 
}

export const deleteProduct = async( req: Request, res: Response) => {
    
    const { id } = req.params;

    try { 
        const product = await Products.findByPk( id );
        if ( !product ) {
            return res.status( 404 ).json({
                msg: 'ID not found'
            })
        }

       /*  await product.update( { status: 0 } ); */
        res.json( product );

    } catch ( error ) {
        console.log(error);       
        res.status( 500 ).json({
            msg: 'need administrator permission'
        })       
    } 
}

