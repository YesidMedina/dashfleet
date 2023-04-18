import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Client } from "../../interfaces/process";

export const DetailHome = () => {
  const [ information, setInformation ] = useState<Client>();
  const [ orders, setOrders ] = useState([]);
  const [ status, setStatus ] = useState([]);
  const [ dates, setDates ] = useState([]);
  const params = useParams();

  const getOrderDetail = async () => {
    const respData = await axios.get(
      `http://localhost:3000/api/clients/${ params.userId }/${ params.orderId }`
    );
    setInformation( respData.data );

    const order = respData.data;
    const {
      orders: [{ ordercode, date, status }],
    } = order;
    setOrders( ordercode ), setDates( date ), setStatus( status );
  };

  const Products = ({ nameproduct, reference, amount }: any) => (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th className="px-6 py-4 whitespace-nowrap dark:text-white capitalize">
        { nameproduct }
      </th>
      <td className="px-6 py-4 uppercase">{ reference }</td>
      <td className="px-6 py-4">{ amount }</td>
    </tr>
  );

  useEffect(() => {
    getOrderDetail();
  }, []);

  return (
    <>
      <div className="w-full text-x text-left text-black py-4 p-2">
        <h2 className="px-6 py-1 font-bold ">
          Còdigo Pedido: {""}
          <span className="text-gray-500 uppercase">{ orders } </span>
        </h2>
        <h2 className="px-6 py-1 font-bold ">
          {" "}
          Cliente: {""}
          <span className="text-gray-500 capitalize">{ information?.name } </span>
        </h2>
        <h2 className="px-6 py-1 font-bold ">
          {" "}
          Direcciòn de entrega: {""}
          <span className="text-gray-500 uppercase">
            { information?.address }{" "}
          </span>
        </h2>
      </div>
      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-slate-300">
          <thead className="text-x text-black ">
            <tr>
              <th className="px-6 py-3">Nombre del producto</th>
              <th className="px-6 py-3">Ref.</th>
              <th className="px-6 py-3">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {information?.orders.map((order) =>
              order.products.map((product, i) => (
                <Products
                  nameproduct={ product.nameproduct }
                  reference={ product.ref }
                  amount={ product.amount }
                  key={ i }
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="w-full text-x text-left text-black dark:text-gray-400 font-bold">
        <h2 className="px-6 py-2">
          {" "}
          Estado del pedido: {""}
          <span className="text-gray-500 capitalize">{ status } </span>
        </h2>
        <h2 className="px-6 py-2">
          {" "}
          Fecha estimada de entrega: {""}
          <span className="text-gray-500 uppercase">{ dates } </span>
        </h2>
      </div>
      <div className="p-8">
        <Link
          to="/close"
          className="focus:outline-none text-white bg-red-700 
                 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm
                 px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Cerrar
        </Link>
        <Link
          to="/"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
                 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Nueva consulta
        </Link>
      </div>
    </>
  );
};
