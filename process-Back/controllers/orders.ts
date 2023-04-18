
import { Request, Response } from 'express';
import Orders from '../models/orders'; 

export const getOrders= async( req: Request, res: Response ) => {

    try { 
        const orders = await Orders.findAll();
        res.json( orders )
    } catch (error) {
        res.json('Error server');            
    }
}

export const getOrder = async( req: Request, res: Response ) => {

    const { id } = req.params;

    const order = await Orders.findByPk(id);
        if( !order ) {
            res.status( 204 ).json({
                msg: 'ID not found'
            })
        }
    res.json( order );
}

export const postOrder = async( req: Request, res: Response ) => {

    const { body } = req;

    const order = await Orders.create( body );

    const save = await order.save();

    res.json( save );
    
}

export const putOrder = async( req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    
    try {
        const order = await Orders.findByPk(id);
    if( !order ) {
        res.status( 404 ).json({
            msg: 'ID not found'
        })
    }       
    await order?.update( body )
    res.json( order )
    } catch (error) {
        console.log(error);
        res.status( 500 ).json({
            msg: 'Not found'
        })             
    } 
}

export const deleteOrder = async( req: Request, res: Response) => {
    
    const { id } = req.params;

    try { 
        const order = await Orders.findByPk( id );
        if ( !order ) {
            return res.status( 404 ).json({
                msg: 'ID not found'
            })
        }

       /*  await order.update( { status: 0 } ); */
        res.json( order );

    } catch ( error ) {
        console.log(error);       
        res.status( 500 ).json({
            msg: 'need administrator permission'
        })       
    } 
}

