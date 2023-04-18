export interface Client {
    name: string,
    typedocument: string,
    document: string,
    address: string,
    orders: AllOrder[]
}

export interface AllOrder {
    ordercode: string,
    status: string,
    date: string,
    products: AllProducts[],
}

export interface AllProducts {
    nameproduct: string,
    ref: string,
    amount: string,
}