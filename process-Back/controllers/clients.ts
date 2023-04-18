import { Request, Response } from "express";
import Clients from "../models/clients";
import Orders from "../models/orders";
import Products from "../models/products";

export const getClients = async ( req: Request, res: Response ) => {
  try {
    const clients = await Clients.findAll({ include: [{ model: Orders }] });
    res.json(clients);
  } catch (error) {
    res.status(500).json({
        msg: 'Error server'
    });
  }
};

export const getOrderDetail = async ( req: Request, res: Response ) => {
  const { id, orderId } = req.params;

  try {
    const client = await Clients.findByPk(Number( id ), {
      include: [
        {
          model: Orders,
          where: { id: Number( orderId ) },
          include: [{ model: Products }],
        },
      ],
    });
    
    res.json( client );
  } catch ( error ) {
    console.log(error);
    res.status( 500 ).json({
      msg: "Not found",
    });
  }
};

export const postClient = async ( req: Request, res: Response ) => {
  const { body } = req;

  const client = await Clients.create( body );

  const save = await client.save();

  res.json( save );
};

export const putClient = async ( req: Request, res: Response ) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const client = await Clients.findByPk( id );
    if ( !client ) {
      res.status( 404 ).json({
        msg: "ID not found",
      });
    }
    await client?.update( body );
    res.json( client );
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json({
      msg: "Not found",
    });
  }
};

export const deleteClient = async ( req: Request, res: Response ) => {
  const { id } = req.params;

    try { 
        const client = await Clients.findByPk( id );
        if ( !client ) {
            return res.status( 404 ).json({
                msg: 'ID not found'
            })
        }
        /* await client.update( { status: 0 } ); */
        res.json( client );

    } catch ( error ) {
        console.log(error);       
        res.status( 500 ).json({
            msg: 'need administrator permission'
        })       
    } 
};
